// Penny AI 助手交互逻辑

// 状态配置
const expressions = {
    normal: {
        text: '你好！我是 Penny，有什么可以帮你的吗？',
        bubble: '点击开始对话 💬',
        className: ''
    },
    happy: {
        text: '太棒了！我很开心能帮到你！😊',
        bubble: '有什么好消息吗？',
        className: 'happy'
    },
    thinking: {
        text: '让我想想...这个问题很有意思 🤔',
        bubble: 'Penny 正在思考中...',
        className: 'thinking'
    },
    surprised: {
        text: '哇！真的吗？太令人惊讶了！😲',
        bubble: '发生了什么？',
        className: 'surprised'
    }
};

// 对话内容
const conversations = [
    { q: '你好', a: '你好呀！很高兴见到你！我是 Penny，你的 AI 助手。😊' },
    { q: '你是谁', a: '我是 Penny，一个可爱的 AI 助手！我可以帮你解答问题、聊天、或者只是陪伴你。' },
    { q: '你能做什么', a: '我可以做很多事情哦！比如回答问题、提供建议、陪你聊天、讲笑话...只要你说，我就尽力帮忙！' },
    { q: '讲个笑话', a: '为什么程序员总是分不清圣诞节和万圣节？因为 Oct 31 == Dec 25！😄' },
    { q: '谢谢', a: '不客气！能帮到你我也很开心！有需要随时叫我哦~' },
    { q: '再见', a: '再见！期待下次和你聊天！👋' }
];

// 当前状态
let currentExpression = 'normal';
let isAutoAnimating = false;
let autoAnimationInterval = null;
let blinkInterval = null;

// 获取元素
const penny = document.getElementById('penny');
const status = document.getElementById('status');
const bubbleText = document.getElementById('bubbleText');
const chatBubble = document.getElementById('chatBubble');
const thinkingBubbles = document.getElementById('thinkingBubbles');

// 设置表情
function setExpression(expression) {
    // 移除所有表情类
    penny.classList.remove('normal', 'happy', 'thinking', 'surprised');

    // 添加新表情类
    if (expression !== 'normal') {
        penny.classList.add(expression);
    }

    // 更新文字
    currentExpression = expression;
    const config = expressions[expression];
    status.textContent = config.text;
    bubbleText.textContent = config.bubble;

    // 思考状态显示气泡
    if (expression === 'thinking') {
        thinkingBubbles.classList.add('show');
    } else {
        thinkingBubbles.classList.remove('show');
    }

    // 添加跳跃动画
    penny.classList.add('jumping');
    setTimeout(() => {
        penny.classList.remove('jumping');
    }, 500);
}

// 眨眼动画
function blink() {
    penny.classList.add('blinking');
    setTimeout(() => {
        penny.classList.remove('blinking');
    }, 200);
}

// 自动眨眼
function startBlinking() {
    blinkInterval = setInterval(() => {
        if (Math.random() > 0.3) { // 70% 概率眨眼
            blink();
        }
    }, 3000 + Math.random() * 2000); // 3-5秒随机间隔
}

// 停止眨眼
function stopBlinking() {
    clearInterval(blinkInterval);
}

// 自动动画
function toggleAnimation() {
    isAutoAnimating = !isAutoAnimating;

    if (isAutoAnimating) {
        // 开始自动动画
        const expressionKeys = Object.keys(expressions);
        let index = 0;

        autoAnimationInterval = setInterval(() => {
            index = (index + 1) % expressionKeys.length;
            setExpression(expressionKeys[index]);
        }, 2000);

        // 更新按钮文字
        event.target.textContent = '停止动画';
        event.target.classList.add('active');
    } else {
        // 停止自动动画
        clearInterval(autoAnimationInterval);
        setExpression('normal');

        // 更新按钮文字
        event.target.textContent = '自动动画';
        event.target.classList.remove('active');
    }
}

// 对话功能
function chat() {
    const userMessage = prompt('你想对 Penny 说什么？');

    if (!userMessage) return;

    // 显示思考状态
    setExpression('thinking');

    // 模拟思考时间
    setTimeout(() => {
        // 查找匹配的回答
        const response = findResponse(userMessage);

        // 根据回答内容设置表情
        if (response.includes('开心') || response.includes('😊')) {
            setExpression('happy');
        } else if (response.includes('惊讶') || response.includes('😲')) {
            setExpression('surprised');
        } else {
            setExpression('normal');
        }

        // 显示回答
        bubbleText.textContent = response;

        // 挥手
        penny.classList.add('waving');
        setTimeout(() => {
            penny.classList.remove('waving');
        }, 1500);

    }, 1000 + Math.random() * 1000); // 1-2秒思考时间
}

// 查找回答
function findResponse(message) {
    const lowerMessage = message.toLowerCase();

    for (const conv of conversations) {
        if (lowerMessage.includes(conv.q)) {
            return conv.a;
        }
    }

    // 默认回答
    const defaultResponses = [
        '这个很有意思！能多说一点吗？',
        '我明白了，继续说...',
        '嗯嗯，我在听呢！',
        '这是个好问题！让我想想...',
        '哈哈，真的吗？',
        '我懂了，谢谢分享！'
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// 鼠标交互
penny.addEventListener('mouseenter', () => {
    if (!isAutoAnimating) {
        setExpression('happy');
    }
});

penny.addEventListener('mouseleave', () => {
    if (!isAutoAnimating) {
        setExpression('normal');
    }
});

penny.addEventListener('click', () => {
    penny.classList.add('waving');
    setTimeout(() => {
        penny.classList.remove('waving');
    }, 1500);
});

// 对话气泡点击
chatBubble.addEventListener('click', chat);

// 键盘交互
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '1':
            setExpression('normal');
            break;
        case '2':
            setExpression('happy');
            break;
        case '3':
            setExpression('thinking');
            break;
        case '4':
            setExpression('surprised');
            break;
        case ' ':
            e.preventDefault();
            blink();
            break;
    }
});

// 初始化
function init() {
    startBlinking();
    console.log('🎉 Penny 已加载完成！');
    console.log('快捷键：1-正常, 2-开心, 3-思考, 4-惊讶, 空格-眨眼');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 导出函数供 HTML 调用
window.setExpression = setExpression;
window.toggleAnimation = toggleAnimation;
window.chat = chat;
window.blink = blink;
