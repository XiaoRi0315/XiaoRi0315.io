// data.js - 專門放店家資料
const MOCK_DB = [
    { 
        id: 1, 
        name: '豐禾早午餐', 
        category: ['other'], 
        style: 'tw', 
        meals: ['breakfast','lunch'], 
        minTime: 7,
        mapUrl: 'https://maps.app.goo.gl/GcHmPE6KCfBCxt3k8',
        healthTip: '培根屬於加工肉品油脂較高，建議偶爾換成鮪魚或里肌豬排喔！' 
    },
    { 
        id: 2, 
        name: '拉亞漢堡', 
        category: ['other'], 
        style: 'tw', 
        meals: ['breakfast','lunch'], 
        minTime: 5,
        mapUrl: 'https://maps.app.goo.gl/nRKNRA66mUKFk9Re8',
        healthTip: '漢堡醬料是隱藏熱量來源，試著說「醬少」立刻減少50卡！'
    },
    { 
        id: 3, 
        name: '彈芽麵', 
        category: ['noodle'], 
        style: 'tw', 
        meals: ['lunch','dinner'], 
        minTime: 8,
        mapUrl: 'https://maps.app.goo.gl/87UmWR2f15Y3YXPR8',
        healthTip: '大碗乾麵澱粉量高，建議兩個人分食或多點燙青菜平衡一下。'
    },
    { 
        id: 4, 
        name: '甕中傳奇', 
        category: ['noodle','other'], 
        style: 'tw', 
        meals: ['lunch','dinner'], 
        minTime: 6,
        mapUrl: 'https://maps.app.goo.gl/KyLG8Ma1cCH2gZUP7',
        healthTip: '火鍋湯底普林高，建議湯喝一小碗就好，多吃原型食物。'
    },
    { 
        id: 5, 
        name: '雲頂阿二麻辣食堂', 
        category: ['noodle'], 
        style: 'tw', 
        meals: ['lunch','dinner'], 
        minTime: 6,
        mapUrl: 'https://maps.app.goo.gl/ZnhyV2t7XxVWDd6WA',
        healthTip: '麻辣湯刺激腸胃，建議點微辣，並撈除表層浮油再吃。'
    },
    { 
        id: 6, 
        name: '侯美國紅茶好吃雞', 
        category: ['rice','noodle'], 
        style: 'tw', 
        meals: ['lunch','dinner'], 
        minTime: 7,
        mapUrl: 'https://maps.app.goo.gl/JEUL47n9tZGPUesa9',
        healthTip: '雞肉是優質蛋白！記得去皮再吃，可以減少飽和脂肪攝取。'
    },
    { 
        id: 7, 
        name: '義ㄇㄞㄇㄞ義大利麵', 
        category: ['noodle'], 
        style: 'us', 
        meals: ['lunch','dinner'], 
        minTime: 7,
        mapUrl: 'https://maps.app.goo.gl/Wu86afLTzzoYKqpg9',
        healthTip: '白醬熱量最高，紅醬(茄汁)或清炒是相對清爽的選擇喔！'
    },
    { 
        id: 8, 
        name: 'YU丼飯', 
        category: ['rice'], 
        style: 'jp', 
        meals: ['lunch','dinner'], 
        minTime: 7,
        mapUrl: 'https://maps.app.goo.gl/VNhQvsNjcqyjZ4QD9',
        healthTip: '丼飯醬汁通常較鹹甜，建議飯不要淋太多醬，或少吃一口飯。'
    },
    { 
        id: 9, 
        name: '石牌老牌肉圓', 
        category: ['other'], 
        style: 'tw', 
        meals: ['dinner'], 
        minTime: 7,
        mapUrl: 'https://maps.app.goo.gl/Lhf7hEtszmkKet7V7',
        healthTip: '肉圓皮是澱粉，內餡有調味，下一餐記得多補充深綠色蔬菜！'
    },
];