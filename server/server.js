const express = require("express");
const path = require("node:path"); // no need to install because it comes with node
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    const userIp = req.ip;

    next()
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, './admin/admin.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './login/login.html'));
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    const interfaces = os.networkInterfaces();
    let lanAddress = "Not found";
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === "IPv4" && !iface.internal) {
                lanAddress = iface.address;
                break;
            }
        }
        if (lanAddress !== "Not found") break;
    }

    // add a little vite-like message on server start (ANSI escape codes)
    console.log(`\n  \x1b[32m➜\x1b[0m  \x1b[1mLocal:\x1b[0m   \x1b[36mhttp://localhost:${PORT}\x1b[0m`);
    if (lanAddress !== "Not found") {
        console.log(`  \x1b[32m➜\x1b[0m  \x1b[1mNetwork:\x1b[0m \x1b[36mhttp://${lanAddress}:${PORT}\x1b[0m \n`);
    }
});