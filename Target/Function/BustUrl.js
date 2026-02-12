const t=n=>`${n}${n.includes("?")?"&":"?"}Time=${encodeURIComponent(Date.now())}`;export{t as BustUrl};
