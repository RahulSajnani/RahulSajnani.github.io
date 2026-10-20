$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});

$(document).ready(function () {
  // Hide broken / missing preview thumbnails: if the col-sm-2 inside a
  // publication card has no working .preview image, drop the whole thumbnail
  // column and let the info column take the full card.
  $(".publications ol.bibliography > li").each(function () {
    const li = $(this);
    const thumbCol = li.find(".col-sm-2").first();
    const previewImg = thumbCol.find("img.preview");
    const hideThumbCol = () => {
      thumbCol.hide();
      const info = li.find(".col-sm-8, .col-sm-10").first();
      info.removeClass("col-sm-8").addClass("col-sm-12");
    };
    if (previewImg.length === 0) {
      hideThumbCol();
    } else {
      previewImg.on("error", hideThumbCol);
      // naturalHeight===0 after it has already attempted to load.
      if (previewImg[0].complete && previewImg[0].naturalHeight === 0) hideThumbCol();
    }
  });

  // Make publication cards clickable (home page + /publications/).
  // Priority: local project page -> webpage field -> arXiv.
  $(".publications ol.bibliography > li").each(function () {
    const li = $(this);
    const links = li.find(".links a.btn");
    let href = null;

    // 1. Local project page (/projects/...)
    links.each(function () {
      const h = $(this).attr("href");
      if (h && h.startsWith("/projects/")) { href = h; return false; }
    });
    // 2. Any webpage link (external project page)
    if (!href) {
      links.each(function () {
        const text = $(this).text().trim().toLowerCase();
        if (text === "webpage" || text === "website" || text === "project") {
          href = $(this).attr("href"); return false;
        }
      });
    }
    // 3. arXiv fallback
    if (!href) {
      links.each(function () {
        const h = $(this).attr("href");
        if (h && h.includes("arxiv.org")) { href = h; return false; }
      });
    }

    if (!href) return;
    li.css("cursor", "pointer");
    li.on("click", function (e) {
      // Don't hijack clicks on real links/buttons inside the card.
      if (e.target.closest("a, button, input, textarea, video")) return;
      // Open local pages in same tab, externals in new tab.
      if (href.startsWith("/")) { window.location.href = href; }
      else { window.open(href, "_blank", "noopener"); }
    });
  });
});
