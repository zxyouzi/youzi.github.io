$(function () {

    var mobileAgent = ["iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire"];

    var browser = navigator.userAgent.toLowerCase();

    var isMobile = false;

    for (var i = 0; i < mobileAgent.length; i++) {
        if (browser.indexOf(mobileAgent[i]) != -1) {
            isMobile = true;
            location.href = '//www.codeboy.me';
            break;
        }
    }

    if (!isMobile) {
        document.getElementById("maxim").style.display = 'block';
    }

    //指定条目数
    tips = new Array(100);
    //条目内容
    tips[0] = '阴谋陷害别人的人，自己会首先遭到不幸。 —— 伊索';
    tips[1] = '送人玫瑰，手流余香。';
    tips[2] = '霸祖孤身取二江，子孙多以百城降。豪华尽出成功后，逸乐安知与祸双？ —— 王安石';
    tips[3] = '锦上添花固然好,雪中送炭更可贵。';
    tips[4] = '德行的实现是由行为，不是由文字。 —— 夸美纽斯';
    tips[5] = '今天所做之事勿候明天，自己所做之事勿候他人。 —— 歌德';
    tips[6] = '知耻近乎勇。 —— 孔丘';
    tips[7] = '辱，莫大于不知耻。 —— 王通';
    tips[8] = '知之者不如好之者，好之者不如乐之者。 —— 孔子';
    tips[9] = '信念，你拿它没办法，但是没有它你什么也做不成。 —— 撒姆尔·巴特勒';
    tips[10] = '辛勤的蜜蜂永远没有时间的悲哀。 —— 布莱克';
    tips[11] = '人生应该如蜡烛一样，从顶燃到底，一直都是光明的。 —— 萧楚女';
    tips[12] = '人生的价值，即以其人对于当代所做的工作为尺度。 —— 徐玮';
    tips[13] = '路是脚踏出来的，历史是人写出来的。人的每一步行动都在书写自己的历史。 —— 吉鸿昌';
    tips[14] = '春蚕到死丝方尽，人至期颐亦不休。一息尚存须努力，留作青年好范畴。 —— 吴玉章';
    tips[15] = '但愿每次回忆，对生活都不感到负疚 —— 郭小川';
    tips[16] = '人的一生可能燃烧也可能腐朽，我不能腐朽，我愿意燃烧起来！ —— 奥斯特洛夫斯基';
    tips[17] = '你若要喜爱你自己的价值，你就得给世界创造价值。 —— 歌德';
    tips[18] = '社会犹如一条船，每个人都要有掌舵的准备。 —— 易卜生';
    tips[19] = '人生不是一种享乐，而是一桩十分沉重的工作。 —— 列夫·托尔斯泰';
    tips[20] = '人生的价值，并不是用时间，而是用深度去衡量的。 —— 列夫·托尔斯泰';
    tips[21] = '生活只有在平淡无味的人看来才是空虚而平淡无味的。 —— 车尔尼雪夫斯基';
    tips[22] = '一个人的价值，应该看他贡献什么，而不应当看他取得什么。 —— 爱因斯坦';
    tips[23] = '人只有献身于社会，才能找出那短暂而有风险的生命的意义。 —— 爱因斯坦';
    tips[24] = '芸芸众生，孰不爱生？爱生之极，进而爱群。 —— 秋瑾';
    tips[25] = '生活真象这杯浓酒，不经三番五次的提炼呵，就不会这样可口！ —— 郭小川';
    tips[26] = '充满着欢乐与斗争精神的人们，永远带着欢乐，欢迎雷霆与阳光。 —— 赫胥黎';
    tips[27] = '君子忧道不忧贫。 —— 孔丘';
    tips[28] = '为了生活中努力发挥自己的作用，热爱人生吧。 —— 罗丹';
    tips[29] = '希望是附丽于存在的，有存在，便有希望，有希望，便是光明。 —— 鲁迅';
    tips[30] = '沉沉的黑夜都是白天的前奏。 —— 郭小川';
    tips[31] = '当一个人用工作去迎接光明，光明很快就会来照耀着他。 —— 冯学峰';
    tips[32] = '东天已经到来，春天还会远吗？ —— 雪莱';
    tips[33] = '过去属于死神，未来属于你自己。 —— 雪莱';
    tips[34] = '世间的活动，缺点虽多，但仍是美好的。 —— 罗丹';
    tips[35] = '辛勤的蜜蜂永没有时间悲哀。 —— 布莱克';
    tips[36] = '希望是厄运的忠实的姐妹。 —— 普希金';
    tips[37] = '当你的希望一个个落空，你也要坚定，要沉着！ —— 朗费罗';
    tips[38] = '先相信你自己，然后别人才会相信你。 —— 屠格涅夫';
    tips[39] = '不要慨叹生活底痛苦！慨叹是弱者。 —— 高尔基';
    tips[40] = '宿命论是那些缺乏意志力的弱者的借口。 —— 罗曼·罗兰';
    tips[41] = '侈则多欲。君子多欲则念慕富贵，枉道速祸。 —— 司马光';
    tips[42] = '私心胜者，可以灭公。 —— 林逋';
    tips[43] = '人人好公，则天下太平；人人营私，则天下大乱。 —— 刘鹗';
    tips[44] = '自私自利之心，是立人达人之障。 —— 吕坤';
    tips[45] = '如烟往事俱忘却，心底无私天地宽。 —— 陶铸';
    tips[46] = '常求有利别人，不求有利自己。 —— 谢觉哉';
    tips[47] = '一切利己的生活，都是非理性的，动物的生活。 —— 列夫·托尔斯泰';
    tips[48] = '人的理性粉碎了迷信，而人的感情也将摧毁利己主义。 —— 海涅';
    tips[49] = '无私是稀有的道德，因为从它身上是无利可图的。 —— 布莱希特';
    tips[50] = '君子喻于义，小人喻于利。 —— 孔丘';
    tips[51] = '不戚戚于贫贱，不汲汲于富贵。 —— 陶渊明';
    tips[52] = '富贵不淫贫贱乐，男儿到此是豪雄。 —— 程颢';
    tips[53] = '清贫，洁白朴素的生活，正是我们革命者能够战胜许多困难的地方！ —— 方志敏';
    tips[54] = '三军可夺帅也,匹夫不可夺志也。 —— 孔丘';
    tips[55] = '志不强者智不达。 —— 墨翟';
    tips[56] = '燕雀安知鸿鹄之志哉！ —— 陈涉';
    tips[57] = '志当存高远。 —— 诸葛亮';
    tips[58] = '老骥伏枥，志在千里；烈士暮年，壮心不已。 —— 曹操';
    tips[59] = '燕雀戏藩柴，安识鸿鹄游。 —— 曹植';
    tips[60] = '穷且益坚，不坠青云之志。 —— 王勃';
    tips[61] = '大鹏一日同风起，扶摇直上九万里。 —— 李白';
    tips[62] = '古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。 —— 苏轼';
    tips[63] = '生当作人杰，死亦为鬼雄，至今思项羽，不肯过江东。 —— 李清照';
    tips[64] = '壮心未与年俱老，死去犹能作鬼雄。 —— 陆游';
    tips[65] = '故立志者，为学之心也；为学者，立志之事也。 —— 王阳明';
    tips[66] = '贫不足羞，可羞是贫而无志。 —— 吕坤';
    tips[67] = '我们以人们的目的来判断人的活动。目的伟大，活动才可以说是伟大的。 —— 契诃夫';
    tips[68] = '毫无理想而又优柔寡断是一种可悲的心理。 —— 培根';
    tips[69] = '生活的理想，就是为了理想的生活。 —— 张闻天';
    tips[70] = '人，只要有一种信念，有所追求，什么艰苦都能忍受，什么环境也都能适应。 —— 丁玲';
    tips[71] = '理想的人物不仅要在物质需要的满足上，还要在精神旨趣的满足上得到表现。 —— 黑格尔';
    tips[72] = '一个能思想的人，才真是一个力量无边的人。 —— 巴尔扎克';
    tips[73] = '一个没有受到献身的热情所鼓舞的人，永远不会做出什么伟大的事情来。 —— 车尔尼雪夫斯基';
    tips[74] = '共同的事业，共同的斗争，可以使人们产生忍受一切的力量。 —— 奥斯特洛夫斯基';
    tips[75] = '我从来不把安逸和快乐看作是生活目的本身---这种伦理基础，我叫它猪栏的理想。 —— 爱因斯坦';
    tips[76] = '在一个人民的国家中还要有一种推动的枢纽，这就是美德。 —— 孟德斯鸠';
    tips[77] = '人不能象走兽那样活着，应该追求知识和美德。 —— 但丁';
    tips[78] = '勿以恶小而为之，勿以善小而不为。惟贤惟德，能服于人。 —— 刘备';
    tips[79] = '不患位之不尊，而患德之不崇；不耻禄之不伙，而耻智之不博。 —— 张衡';
    tips[80] = '土扶可城墙，积德为厚地。 —— 李白';
    tips[81] = '行一件好事，心中泰然；行一件歹事，衾影抱愧。 —— 神涵光';
    tips[82] = '入于污泥而不染、不受资产阶级糖衣炮弹的侵蚀，是最难能可贵的革命品质。—— 周恩来';
    tips[83] = '一个人最伤心的事情无过于良心的死灭。 —— 郭沫若';
    tips[84] = '害羞是畏惧或害怕羞辱的情绪，这种情绪可以阻止人不去犯某些卑鄙的行为。 —— 斯宾诺莎';
    tips[85] = '应该热心地致力于照道德行事，而不要空谈道德。 —— 德谟克利特';
    tips[86] = '感情有着极大的鼓舞力量，因此，它是一切道德行为的重要前提。 —— 凯洛夫';
    tips[87] = '没有伟大的品格，就没有伟大的人，甚至也没有伟大的艺术家，伟大的行动者。 —— 罗曼·罗兰';
    tips[88] = '理智要比心灵为高，思想要比感情可靠。 —— 高尔基';
    tips[89] = '逝者如斯夫,不舍昼夜。 —— 孔子';
    tips[90] = '人类被赋予了一种工作，那就是精神的成长。 —— 列夫·托尔斯泰';
    tips[91] = '人在智慧上应当是明豁的，道德上应该是清白的，身体上应该是清洁的。 —— 契诃夫';
    tips[92] = '良心是由人的知识和全部生活方式来决定的。 —— 马克思';
    tips[93] = '不念居安思危，戒奢以俭；斯以伐根而求木茂，塞源而欲流长也。 —— 魏徵';
    tips[94] = '历览前贤国与家，成由勤俭破由奢。 —— 李商隐';
    tips[95] = '奢则妄取苟取，志气卑辱；一从俭约，则于人无求，于己无愧，是可以养气也。 —— 罗大经';
    tips[96] = '如果道德败坏了，趣味也必然会堕落。——狄德罗';
    tips[97] = '我愿证明，凡是行为善良与高尚的人，定能因之而担当患难。 —— 贝多芬';
    tips[98] = '装饰对于德行也同样是格格不入的，因为德行是灵魂的力量和生气。 —— 卢梭';
    tips[99] = '我深信只有有道德的公民才能向自己的祖国致以可被接受的敬礼。 —— 卢梭';
    tips[100] = '对于事实问题的健全的判断是一切德行的真正基础。 —— 夸美纽斯';
    var index = Math.floor(Math.random() * tips.length);
    $("#maxim").text(tips[index] == 'undefined' ? tips[89] : tips[index]);

});
