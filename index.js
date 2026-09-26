const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('السيرفر شغال والبوت متصل بـ SWORD SMP بنجاح 24 ساعة!'));
app.listen(process.env.PORT || 3000, () => console.log("الويب سيرفر شغال."));

function createBot() {
    const bot = mineflayer.createBot({
        host: 'sword_smp2.aternos.me',
        username: 'SWORD_24_7_BOT',
        version: false
    });

    bot.on('spawn', () => console.log('🤖 البوت داخل السيرفر حالياً وبدون أي مشاكل!'));
    bot.on('end', () => {
        console.log('انفصل البوت، يتم إعادة الاتصال تلقائياً...');
        setTimeout(createBot, 5000);
    });
    bot.on('error', (err) => console.log(err));
}
createBot();
