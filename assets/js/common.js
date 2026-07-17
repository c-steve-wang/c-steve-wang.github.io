$(document).ready(function() {
  // add toggle functionality to abstract and bibtex buttons
  $('.publication-link.abstract').click(function() {
    $(this).closest('.publication-entry').find(".abstract.hidden").toggleClass('open');
    $(this).closest('.publication-entry').find(".bibtex.hidden.open").toggleClass('open');
  });
  $('.publication-link.bibtex').click(function() {
    $(this).closest('.publication-entry').find(".bibtex.hidden").toggleClass('open');
    $(this).closest('.publication-entry').find(".abstract.hidden.open").toggleClass('open');
  });

  document.querySelectorAll('button.more-authors').forEach(function(button) {
    button.addEventListener('click', function() {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.textContent = expanded ? button.dataset.collapsedLabel : button.dataset.expandedLabel;
    });
  });
  $('a').removeClass('waves-effect waves-light');

  // Show six news items by default and expand the complete list on request.
  document.querySelectorAll('.news-scroll.is-expandable').forEach(function(scroller) {
    const frame = scroller.closest('.news-frame');
    const rows = Array.from(scroller.querySelectorAll('tbody > tr'));
    const visibleItems = Number(scroller.dataset.visibleItems) || 6;
    const toggle = frame ? frame.querySelector('.news-expand-toggle') : null;
    const label = toggle ? toggle.querySelector('[data-news-toggle-label]') : null;

    if (!frame || !toggle || rows.length <= visibleItems) return;

    const collapsedHeight = function() {
      return rows.slice(0, visibleItems).reduce(function(height, row) {
        return height + row.getBoundingClientRect().height;
      }, 0);
    };

    const setExpanded = function(expanded) {
      frame.classList.toggle('is-expanded', expanded);
      frame.classList.toggle('is-collapsed', !expanded);
      toggle.setAttribute('aria-expanded', String(expanded));
      if (label) label.textContent = expanded ? 'Show latest only' : 'Show all news (' + rows.length + ')';
      scroller.style.maxHeight = Math.ceil(expanded ? scroller.scrollHeight : collapsedHeight()) + 'px';
    };

    toggle.addEventListener('click', function() {
      setExpanded(toggle.getAttribute('aria-expanded') !== 'true');
    });

    let resizeTimer;
    window.addEventListener('resize', function() {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function() {
        setExpanded(toggle.getAttribute('aria-expanded') === 'true');
      }, 120);
    });

    setExpanded(false);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function() {
        setExpanded(toggle.getAttribute('aria-expanded') === 'true');
      });
    }
  });

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href  = "../css/jupyter.css";
  cssLink.rel   = "stylesheet";
  cssLink.type  = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $('.jupyter-notebook-iframe-container iframe').each(function() {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load",function(){
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark"});
      });
    }
  });
});
