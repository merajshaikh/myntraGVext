(() => {
    const text = document.body.innerText;
    const regex = /\D+?(\d{16})[\s\S]*?(\d{6})\b/g;
  
    let match;
    const results = [];
  
    while ((match = regex.exec(text)) !== null) {
      const card = match[1];
      const pin = match[2];
      results.push({ card, pin });
    }
  
    chrome.runtime.sendMessage({ type: 'CODES_FOUND', data: results });

    
  })();
