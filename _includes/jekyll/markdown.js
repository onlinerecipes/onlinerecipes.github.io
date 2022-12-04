formatCodeTabs();
addCodeLineNumbers();
addCodeCopyIcon();
addCodeShadowOnLeftScroll();
addPreviousArticleLinkArrowIcon();
addNextArticleLinkArrowIcon();
formatShellCommands();
highlightCodeLines();

function formatCodeTabs() {
  document.querySelectorAll('.code-tabs + ul').forEach((codeTabs) => {
    try {
      const tabsContentsId = 'tas-contents-id-' + Date.now() + Math.floor(Math.random() * 100);
      let tabsLinks = '<div class="tab-links">';
      let tabsContents = `<div class="tab-content-wrapper">`;
      codeTabs.querySelectorAll('li').forEach((codeTab) => {
        const tabName = codeTab.querySelector('p').textContent;
        const tabId = tabName + '-' + tabsContentsId;
        let tabContent = codeTab.innerHTML;
        if (codeTab.querySelector('div')) tabContent = codeTab.querySelector('div').innerHTML;
        if (codeTab.querySelector('img')) tabContent = codeTab.querySelector('img').outerHTML;
        console.log(codeTab.querySelector('img'));
        tabsLinks += `<button class="tab-link" onclick="openCode(event, '${tabId}', '${tabsContentsId}')">${tabName}</button>`;
        tabsContents += `<div id="${tabId}" class="tab-content">${tabContent}</div>`;
      });
      tabsLinks += '</div>';
      tabsContents + '</div>';
      codeTabs.outerHTML = `<div id="${tabsContentsId}">${tabsLinks}${tabsContents}</div>`;
      document.querySelector(`#${tabsContentsId} .tab-link`).click();
    } catch (error) {
      console.error(error);
    }
  });
}

function openCode(event, tabId, tabsContentsId) {
  try {
    const tabsContents = document.getElementById(tabsContentsId);
    tabsContents.querySelectorAll('.tab-content').forEach((tabContent) => (tabContent.style.display = 'none'));
    tabsContents.querySelectorAll('.tab-link').forEach((tabLink) => tabLink.classList.remove('active'));
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
  } catch (error) {
    console.error(error);
  }
}

function addCodeLineNumbers() {
  try {
    document.querySelectorAll('pre.highlight').forEach((code) => {
      try {
        const codeLineNumbers = (code.innerHTML.match(/\n/g) || []).length;
        let codeLineNumbersHtml = '<div class="code-line-number">';
        for (let i = 1; i <= codeLineNumbers; i++) {
          codeLineNumbersHtml += `<span>${i}</span>`;
        }
        codeLineNumbersHtml += '</div>';
        code.insertAdjacentHTML('afterbegin', codeLineNumbersHtml);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function addCodeCopyIcon() {
  try {
    document.querySelectorAll('pre.highlight code').forEach((code) => {
      const codeId = 'code-id-' + Date.now() + Math.floor(Math.random() * 100);
      code.id = codeId;
      const copyCodeIconHtml = /* html */ `
        <span 
          title="copy code" 
          onclick="onCodeCopyIconClick(event, '${codeId}')" 
          class="code-copy-icon iconify" 
          data-icon="icon-park-solid:copy" 
          data-inline="false"
        ></span>
      `;
      code.insertAdjacentHTML('beforebegin', copyCodeIconHtml);

      code.style.position = 'relative';
    });
  } catch (error) {
    console.error(error);
  }
}

function onCodeCopyIconClick(event, codeId) {
  const code = document.getElementById(codeId);
  const codeText = code.innerText || code.contentText;
  const textarea = document.createElement('textarea');
  textarea.textContent = codeText;
  textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
  document.body.appendChild(textarea);
  textarea.select();
  const span = document.createElement('span');
  span.innerText = 'Copied';
  span.style.fontSize = '13px';
  span.style.fontFamily = 'Roboto';
  span.style.fontWeight = '500';
  span.style.position = 'absolute';
  span.style.top = '13px';
  span.style.right = '43px';
  span.style.padding = '2px 14px';
  span.style.borderRadius = '3px';
  span.style.backgroundColor = '#e61972CF';
  span.style.color = 'white';
  span.classList.add('copied');
  span.style.opacity = '0';
  code.appendChild(span);
  span.style.opacity = '1';
  span.style.transition = 'opacity .2s ease-in-out';
  setTimeout(() => (span.style.opacity = '0'), 1250);
  setTimeout(() => code.removeChild(span), 2000);
  try {
    return document.execCommand('copy');
  } catch (error) {
    console.error('Copy to clipboard failed.', error);
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}

function addCodeShadowOnLeftScroll() {
  document.querySelectorAll('pre.highlight code').forEach((code) => {
    code.addEventListener('scroll', delay(handleCodeLeftScroll, 100));
  });
}

function handleCodeLeftScroll(event) {
  const target = event.target;
  if (target.scrollLeft !== 0) {
    target.classList.add('scroll-left');
  } else {
    target.classList.remove('scroll-left');
  }
}

function delay(fn, ms) {
  let timer = 0;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(fn.bind(null, ...args), ms || 0);
  };
}

function addPreviousArticleLinkArrowIcon() {
  const link = document.querySelector('.previous-article');
  if (!link) return;
  const label = link.innerHTML;
  link.innerHTML = /*html*/ `
    <span class="iconify" data-icon="akar-icons:arrow-left"></span>
    <div class="previous-article-label-container">
      <p class="previous-article-label-prefix">Previous</p>
      <p class="previous-article-label">${label}</p>
    </div>
  `;
}

function addNextArticleLinkArrowIcon() {
  const link = document.querySelector('.next-article');
  if (!link) return;
  const label = link.innerHTML;
  link.innerHTML = /*html*/ `
    <div class="next-article-label-container">
      <p class="next-article-label-prefix">Next</p>
      <p class="next-article-label">${label}</p>
    </div>
    <span class="iconify" data-icon="akar-icons:arrow-right"></span>
  `;
}

function formatShellCommands() {
  document.querySelectorAll('.shell-commands code').forEach((code) => {
    const lines = code.innerHTML.split(/\n/);
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('<span class="nv">$') || lines[i].startsWith('<span class="nv">#')) {
        lines[i] = `<span class="shell-command">${lines[i]}</span>`;
      } else {
        lines[i] = `<span class="shell-output">${lines[i]}</span>`;
      }
    }
    code.innerHTML = lines.join('\n');
  });
}

function highlightCodeLines() {
  document.querySelectorAll('[class*="highlight-line-code"]').forEach((codeWrapper) => {
    const code = codeWrapper.querySelector('code');
    const lines = code.innerHTML.split(/\n/);
    codeWrapper
      .getAttribute('class')
      .match(/highlight-line-code-([^ ]+)/)[1]
      .split('-')
      .forEach((line) => (lines[line - 1] = `<p class="line-highlight">${lines[line - 1]}</p>`));
    code.innerHTML = lines.join('\n');
  });
}
