const blinkdot = (text, para, resolve) => {
    let dotCount = 0;
    const interval = setInterval(() => {
        dotCount++;
        para.innerText = '>>>' + text + '.'.repeat(dotCount); 
        if (dotCount === 3) { 
            clearInterval(interval);
            resolve(); 
        }
    }, 1000);
};

const printMsg = (text) => {
    return new Promise((resolve) => {
        let rand = ((Math.ceil(Math.random() * 5)) * 1000);
        setTimeout(() => {
            let para = document.createElement("p");
            para.innerText = ">>>" + text;
            document.body.append(para);
            blinkdot(text, para, resolve);
        }, rand);
    });
}

const hackingPc = async () => {
    await printMsg("Initializing Hacking");
    await printMsg("Reading your files");
    await printMsg("Password files detected");
    await printMsg("Sending all passwords and personal files to server");
    await printMsg("Cleaning up");
};

hackingPc();
