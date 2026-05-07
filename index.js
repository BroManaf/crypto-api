 create mode 100644 node_modules/undici-types/errors.d.ts
 create mode 100644 node_modules/undici-types/eventsource.d.ts
 create mode 100644 node_modules/undici-types/fetch.d.ts
 create mode 100644 node_modules/undici-types/formdata.d.ts
 create mode 100644 node_modules/undici-types/global-dispatcher.d.ts
 create mode 100644 node_modules/undici-types/global-origin.d.ts
 create mode 100644 node_modules/undici-types/h2c-client.d.ts
 create mode 100644 node_modules/undici-types/handlers.d.ts
 create mode 100644 node_modules/undici-types/header.d.ts
 create mode 100644 node_modules/undici-types/index.d.ts
 create mode 100644 node_modules/undici-types/interceptors.d.ts
 create mode 100644 node_modules/undici-types/mock-agent.d.ts
 create mode 100644 node_modules/undici-types/mock-call-history.d.ts
 create mode 100644 node_modules/undici-types/mock-client.d.ts
 create mode 100644 node_modules/undici-types/mock-errors.d.ts
 create mode 100644 node_modules/undici-types/mock-interceptor.d.ts
 create mode 100644 node_modules/undici-types/mock-pool.d.ts
 create mode 100644 node_modules/undici-types/package.json
 create mode 100644 node_modules/undici-types/patch.d.ts
 create mode 100644 node_modules/undici-types/pool-stats.d.ts
 create mode 100644 node_modules/undici-types/pool.d.ts
 create mode 100644 node_modules/undici-types/proxy-agent.d.ts
 create mode 100644 node_modules/undici-types/readable.d.ts
 create mode 100644 node_modules/undici-types/retry-agent.d.ts
 create mode 100644 node_modules/undici-types/retry-handler.d.ts
 create mode 100644 node_modules/undici-types/round-robin-pool.d.ts
 create mode 100644 node_modules/undici-types/snapshot-agent.d.ts
 create mode 100644 node_modules/undici-types/util.d.ts
 create mode 100644 node_modules/undici-types/utility.d.ts
 create mode 100644 node_modules/undici-types/webidl.d.ts
 create mode 100644 node_modules/undici-types/websocket.d.ts
 create mode 100644 node_modules/unpipe/HISTORY.md
 create mode 100644 node_modules/unpipe/LICENSE
 create mode 100644 node_modules/unpipe/README.md
 create mode 100644 node_modules/unpipe/index.js
 create mode 100644 node_modules/unpipe/package.json
 create mode 100644 node_modules/vary/HISTORY.md
 create mode 100644 node_modules/vary/LICENSE
 create mode 100644 node_modules/vary/README.md
 create mode 100644 node_modules/vary/index.js
 create mode 100644 node_modules/vary/package.json
 create mode 100644 node_modules/wrappy/LICENSE
 create mode 100644 node_modules/wrappy/README.md
 create mode 100644 node_modules/wrappy/package.json
 create mode 100644 node_modules/wrappy/wrappy.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api# git remote add origin https://github.com/BroManaf/                    crypto-api.git
root@srv1639423:~/crypto-api# git branch -M main
root@srv1639423:~/crypto-api# git push -u origin main
Username for 'https://github.com': BroManaf
Password for 'https://BroManaf@github.com':
remote: Invalid username or token. Password authentication is not supported for                     Git operations.
fatal: Authentication failed for 'https://github.com/BroManaf/crypto-api.git/'
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api# git push -u origin main
Username for 'https://github.com': BroManaf
Password for 'https://BroManaf@github.com':
Enumerating objects: 1082, done.
Counting objects: 100% (1082/1082), done.
Compressing objects: 100% (1009/1009), done.
Writing objects: 100% (1082/1082), 1.46 MiB | 2.27 MiB/s, done.
Total 1082 (delta 149), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (149/149), done.
To https://github.com/BroManaf/crypto-api.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api# docker ps | grep crypto
6a4571a0f50e   easypanel/auto_trading/crypto-api:latest   "docker-entrypoint.s…"                       About a minute ago   Up About a minute   3001/tcp                                                                                           auto_trading_crypto-api.1.o0mef1pqmpl                    0r6kalraa3322p
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api# ufw allow 3001
Rules updated
Rules updated (v6)
root@srv1639423:~/crypto-api# ufw status
Status: inactive
root@srv1639423:~/crypto-api# iptables -A INPUT -p tcp --dport 3001 -j ACCEPT
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api# ufw status
Status: inactive
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api#
root@srv1639423:~/crypto-api# docker exec -it auto_trading_database mysql -u mys                    ql -pjanganerrorlagiplis! crypto_db -e "SHOW TABLES;"
Error response from daemon: No such container: auto_trading_database
root@srv1639423:~/crypto-api# docker exec -it auto_trading_database mysql -u mys                    ql -pjanganerrorlagiplis! crypto_db -e "SHOW TABLES;"
Error response from daemon: No such container: auto_trading_database
root@srv1639423:~/crypto-api# docker ps --format "table {{.Names}}\t{{.Image}}"
NAMES                                                          IMAGE
auto_trading_crypto-api.1.o0mef1pqmpl0r6kalraa3322p            easypanel/auto_tr                    ading/crypto-api:latest
auto_trading_evolution-api.1.jpuc048167emv1dt4vubyooo4         evoapicloud/evolu                    tion-api:latest
auto_trading_database.1.jrtzqitxayvul88ztzst3jxbw              mysql:9
auto_trading_evolution-api-redis.1.dqen3nl0v3ren3zplgl8c1icw   redis:7
auto_trading_n8n.1.5ub3u18zynzzwo0ddojkk9y7k                   n8nio/n8n:1.123.2                    1
auto_trading_database_phpmyadmin.1.trqatiwk2fzzp0zd6dq2z8i9e   phpmyadmin:5.2.1
easypanel-traefik.1.elzon3gpw7wlckbraseyom7f8                  traefik:3.6.7
auto_trading_evolution-api-db.1.0qagd9264f7vnrkw1d9qncjnj      postgres:17
easypanel.1.a489z9393je37ugyn3rdk77gs                          easypanel/easypan                    el:latest
root@srv1639423:~/crypto-api# docker exec -it auto_trading_database.1.jrtzqitxayvul88ztzst3jxbw mysql -u mysql -pjanganerrorlagiplis! crypto_db -e "SHOW TABLES;"
mysql: [Warning] Using a password on the command line interface can be insecure.
+---------------------+
| Tables_in_crypto_db |
+---------------------+
| dataCollect_gary    |
| dataCollect_manaf   |
| testing             |
| trade_manaf         |
| trade_signals       |
+---------------------+
root@srv1639423:~/crypto-api# nano /root/crypto-api/index.js
  GNU nano 7.2                          /root/crypto-api/index.js
app.get('/signals', (req, res) => {
  const limit = req.query.limit || 50;
  const query = `SELECT * FROM trade_signals ORDER BY id DESC LIMIT ?`;
  db.query(query, [parseInt(limit)], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ total: results.length, data: results });
  });
});

// GET /trades → ambil data dari trade_manaf
app.get('/trades', (req, res) => {
  const limit = req.query.limit || 50;
  const query = `SELECT * FROM trade_manaf ORDER BY id DESC LIMIT ?`;
  db.query(query, [parseInt(limit)], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ total: results.length, data: results });
  });
});

// ============================================
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 API berjalan di port ${PORT}`);
});



