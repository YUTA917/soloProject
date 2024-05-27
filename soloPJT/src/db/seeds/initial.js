/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("users").del();
	await knex("users").insert([
		{ id: 1, name: "cat" },
		{ id: 2, name: "dog" },
		{ id: 3, name: "bird" },
	]);
	await knex("age_of_children").del();
	await knex("age_of_children").insert([
		{ id: 1, age: "0歳~" },
		{ id: 2, age: "2歳~" },
		{ id: 3, age: "3歳~" },
		{ id: 4, age: "4歳~" },
		{ id: 5, age: "5.6歳~" },
		{ id: 6, age: "小学校低学年~" },
		{ id: 7, age: "小学校中学年~" },
		{ id: 8, age: "小学校高学年~" },
		{ id: 9, age: "大人向け" },
	]);
	await knex("cities").del();
	await knex("cities").insert([
		{
			prefecture_id: 1,
			name: "札幌市",
		},
		{
			prefecture_id: 1,
			name: "札幌市中央区",
		},
		{
			prefecture_id: 1,
			name: "札幌市北区",
		},
		{
			prefecture_id: 1,
			name: "札幌市東区",
		},
		{
			prefecture_id: 1,
			name: "札幌市白石区",
		},
		{
			prefecture_id: 1,
			name: "札幌市豊平区",
		},
		{
			prefecture_id: 1,
			name: "札幌市南区",
		},
		{
			prefecture_id: 1,
			name: "札幌市西区",
		},
		{
			prefecture_id: 1,
			name: "札幌市厚別区",
		},
		{
			prefecture_id: 1,
			name: "札幌市手稲区",
		},
		{
			prefecture_id: 1,
			name: "札幌市清田区",
		},
		{
			prefecture_id: 1,
			name: "函館市",
		},
		{
			prefecture_id: 1,
			name: "小樽市",
		},
		{
			prefecture_id: 1,
			name: "旭川市",
		},
		{
			prefecture_id: 1,
			name: "室蘭市",
		},
		{
			prefecture_id: 1,
			name: "釧路市",
		},
		{
			prefecture_id: 1,
			name: "帯広市",
		},
		{
			prefecture_id: 1,
			name: "北見市",
		},
		{
			prefecture_id: 1,
			name: "夕張市",
		},
		{
			prefecture_id: 1,
			name: "岩見沢市",
		},
		{
			prefecture_id: 1,
			name: "網走市",
		},
		{
			prefecture_id: 1,
			name: "留萌市",
		},
		{
			prefecture_id: 1,
			name: "苫小牧市",
		},
		{
			prefecture_id: 1,
			name: "稚内市",
		},
		{
			prefecture_id: 1,
			name: "美唄市",
		},
		{
			prefecture_id: 1,
			name: "芦別市",
		},
		{
			prefecture_id: 1,
			name: "江別市",
		},
		{
			prefecture_id: 1,
			name: "赤平市",
		},
		{
			prefecture_id: 1,
			name: "紋別市",
		},
		{
			prefecture_id: 1,
			name: "士別市",
		},
		{
			prefecture_id: 1,
			name: "名寄市",
		},
		{
			prefecture_id: 1,
			name: "三笠市",
		},
		{
			prefecture_id: 1,
			name: "根室市",
		},
		{
			prefecture_id: 1,
			name: "千歳市",
		},
		{
			prefecture_id: 1,
			name: "滝川市",
		},
		{
			prefecture_id: 1,
			name: "砂川市",
		},
		{
			prefecture_id: 1,
			name: "歌志内市",
		},
		{
			prefecture_id: 1,
			name: "深川市",
		},
		{
			prefecture_id: 1,
			name: "富良野市",
		},
		{
			prefecture_id: 1,
			name: "登別市",
		},
		{
			prefecture_id: 1,
			name: "恵庭市",
		},
		{
			prefecture_id: 1,
			name: "伊達市",
		},
		{
			prefecture_id: 1,
			name: "北広島市",
		},
		{
			prefecture_id: 1,
			name: "石狩市",
		},
		{
			prefecture_id: 1,
			name: "北斗市",
		},
		{
			prefecture_id: 1,
			name: "当別町",
		},
		{
			prefecture_id: 1,
			name: "新篠津村",
		},
		{
			prefecture_id: 1,
			name: "松前町",
		},
		{
			prefecture_id: 1,
			name: "福島町",
		},
		{
			prefecture_id: 1,
			name: "知内町",
		},
		{
			prefecture_id: 1,
			name: "木古内町",
		},
		{
			prefecture_id: 1,
			name: "七飯町",
		},
		{
			prefecture_id: 1,
			name: "鹿部町",
		},
		{
			prefecture_id: 1,
			name: "森町",
		},
		{
			prefecture_id: 1,
			name: "八雲町",
		},
		{
			prefecture_id: 1,
			name: "長万部町",
		},
		{
			prefecture_id: 1,
			name: "江差町",
		},
		{
			prefecture_id: 1,
			name: "上ノ国町",
		},
		{
			prefecture_id: 1,
			name: "厚沢部町",
		},
		{
			prefecture_id: 1,
			name: "乙部町",
		},
		{
			prefecture_id: 1,
			name: "奥尻町",
		},
		{
			prefecture_id: 1,
			name: "今金町",
		},
		{
			prefecture_id: 1,
			name: "せたな町",
		},
		{
			prefecture_id: 1,
			name: "島牧村",
		},
		{
			prefecture_id: 1,
			name: "寿都町",
		},
		{
			prefecture_id: 1,
			name: "黒松内町",
		},
		{
			prefecture_id: 1,
			name: "蘭越町",
		},
		{
			prefecture_id: 1,
			name: "ニセコ町",
		},
		{
			prefecture_id: 1,
			name: "真狩村",
		},
		{
			prefecture_id: 1,
			name: "留寿都村",
		},
		{
			prefecture_id: 1,
			name: "喜茂別町",
		},
		{
			prefecture_id: 1,
			name: "京極町",
		},
		{
			prefecture_id: 1,
			name: "倶知安町",
		},
		{
			prefecture_id: 1,
			name: "共和町",
		},
		{
			prefecture_id: 1,
			name: "岩内町",
		},
		{
			prefecture_id: 1,
			name: "泊村",
		},
		{
			prefecture_id: 1,
			name: "神恵内村",
		},
		{
			prefecture_id: 1,
			name: "積丹町",
		},
		{
			prefecture_id: 1,
			name: "古平町",
		},
		{
			prefecture_id: 1,
			name: "仁木町",
		},
		{
			prefecture_id: 1,
			name: "余市町",
		},
		{
			prefecture_id: 1,
			name: "赤井川村",
		},
		{
			prefecture_id: 1,
			name: "南幌町",
		},
		{
			prefecture_id: 1,
			name: "奈井江町",
		},
		{
			prefecture_id: 1,
			name: "上砂川町",
		},
		{
			prefecture_id: 1,
			name: "由仁町",
		},
		{
			prefecture_id: 1,
			name: "長沼町",
		},
		{
			prefecture_id: 1,
			name: "栗山町",
		},
		{
			prefecture_id: 1,
			name: "月形町",
		},
		{
			prefecture_id: 1,
			name: "浦臼町",
		},
		{
			prefecture_id: 1,
			name: "新十津川町",
		},
		{
			prefecture_id: 1,
			name: "妹背牛町",
		},
		{
			prefecture_id: 1,
			name: "秩父別町",
		},
		{
			prefecture_id: 1,
			name: "雨竜町",
		},
		{
			prefecture_id: 1,
			name: "北竜町",
		},
		{
			prefecture_id: 1,
			name: "沼田町",
		},
		{
			prefecture_id: 1,
			name: "鷹栖町",
		},
		{
			prefecture_id: 1,
			name: "東神楽町",
		},
		{
			prefecture_id: 1,
			name: "当麻町",
		},
		{
			prefecture_id: 1,
			name: "比布町",
		},
		{
			prefecture_id: 1,
			name: "愛別町",
		},
		{
			prefecture_id: 1,
			name: "上川町",
		},
		{
			prefecture_id: 1,
			name: "東川町",
		},
		{
			prefecture_id: 1,
			name: "美瑛町",
		},
		{
			prefecture_id: 1,
			name: "上富良野町",
		},
		{
			prefecture_id: 1,
			name: "中富良野町",
		},
		{
			prefecture_id: 1,
			name: "南富良野町",
		},
		{
			prefecture_id: 1,
			name: "占冠村",
		},
		{
			prefecture_id: 1,
			name: "和寒町",
		},
		{
			prefecture_id: 1,
			name: "剣淵町",
		},
		{
			prefecture_id: 1,
			name: "下川町",
		},
		{
			prefecture_id: 1,
			name: "美深町",
		},
		{
			prefecture_id: 1,
			name: "音威子府村",
		},
		{
			prefecture_id: 1,
			name: "中川町",
		},
		{
			prefecture_id: 1,
			name: "幌加内町",
		},
		{
			prefecture_id: 1,
			name: "増毛町",
		},
		{
			prefecture_id: 1,
			name: "小平町",
		},
		{
			prefecture_id: 1,
			name: "苫前町",
		},
		{
			prefecture_id: 1,
			name: "羽幌町",
		},
		{
			prefecture_id: 1,
			name: "初山別村",
		},
		{
			prefecture_id: 1,
			name: "遠別町",
		},
		{
			prefecture_id: 1,
			name: "天塩町",
		},
		{
			prefecture_id: 1,
			name: "猿払村",
		},
		{
			prefecture_id: 1,
			name: "浜頓別町",
		},
		{
			prefecture_id: 1,
			name: "中頓別町",
		},
		{
			prefecture_id: 1,
			name: "枝幸町",
		},
		{
			prefecture_id: 1,
			name: "豊富町",
		},
		{
			prefecture_id: 1,
			name: "礼文町",
		},
		{
			prefecture_id: 1,
			name: "利尻町",
		},
		{
			prefecture_id: 1,
			name: "利尻富士町",
		},
		{
			prefecture_id: 1,
			name: "幌延町",
		},
		{
			prefecture_id: 1,
			name: "美幌町",
		},
		{
			prefecture_id: 1,
			name: "津別町",
		},
		{
			prefecture_id: 1,
			name: "斜里町",
		},
		{
			prefecture_id: 1,
			name: "清里町",
		},
		{
			prefecture_id: 1,
			name: "小清水町",
		},
		{
			prefecture_id: 1,
			name: "訓子府町",
		},
		{
			prefecture_id: 1,
			name: "置戸町",
		},
		{
			prefecture_id: 1,
			name: "佐呂間町",
		},
		{
			prefecture_id: 1,
			name: "遠軽町",
		},
		{
			prefecture_id: 1,
			name: "湧別町",
		},
		{
			prefecture_id: 1,
			name: "滝上町",
		},
		{
			prefecture_id: 1,
			name: "興部町",
		},
		{
			prefecture_id: 1,
			name: "西興部村",
		},
		{
			prefecture_id: 1,
			name: "雄武町",
		},
		{
			prefecture_id: 1,
			name: "大空町",
		},
		{
			prefecture_id: 1,
			name: "豊浦町",
		},
		{
			prefecture_id: 1,
			name: "壮瞥町",
		},
		{
			prefecture_id: 1,
			name: "白老町",
		},
		{
			prefecture_id: 1,
			name: "厚真町",
		},
		{
			prefecture_id: 1,
			name: "洞爺湖町",
		},
		{
			prefecture_id: 1,
			name: "安平町",
		},
		{
			prefecture_id: 1,
			name: "むかわ町",
		},
		{
			prefecture_id: 1,
			name: "日高町",
		},
		{
			prefecture_id: 1,
			name: "平取町",
		},
		{
			prefecture_id: 1,
			name: "新冠町",
		},
		{
			prefecture_id: 1,
			name: "浦河町",
		},
		{
			prefecture_id: 1,
			name: "様似町",
		},
		{
			prefecture_id: 1,
			name: "えりも町",
		},
		{
			prefecture_id: 1,
			name: "新ひだか町",
		},
		{
			prefecture_id: 1,
			name: "音更町",
		},
		{
			prefecture_id: 1,
			name: "士幌町",
		},
		{
			prefecture_id: 1,
			name: "上士幌町",
		},
		{
			prefecture_id: 1,
			name: "鹿追町",
		},
		{
			prefecture_id: 1,
			name: "新得町",
		},
		{
			prefecture_id: 1,
			name: "清水町",
		},
		{
			prefecture_id: 1,
			name: "芽室町",
		},
		{
			prefecture_id: 1,
			name: "中札内村",
		},
		{
			prefecture_id: 1,
			name: "更別村",
		},
		{
			prefecture_id: 1,
			name: "大樹町",
		},
		{
			prefecture_id: 1,
			name: "広尾町",
		},
		{
			prefecture_id: 1,
			name: "幕別町",
		},
		{
			prefecture_id: 1,
			name: "池田町",
		},
		{
			prefecture_id: 1,
			name: "豊頃町",
		},
		{
			prefecture_id: 1,
			name: "本別町",
		},
		{
			prefecture_id: 1,
			name: "足寄町",
		},
		{
			prefecture_id: 1,
			name: "陸別町",
		},
		{
			prefecture_id: 1,
			name: "浦幌町",
		},
		{
			prefecture_id: 1,
			name: "釧路町",
		},
		{
			prefecture_id: 1,
			name: "厚岸町",
		},
		{
			prefecture_id: 1,
			name: "浜中町",
		},
		{
			prefecture_id: 1,
			name: "標茶町",
		},
		{
			prefecture_id: 1,
			name: "弟子屈町",
		},
		{
			prefecture_id: 1,
			name: "鶴居村",
		},
		{
			prefecture_id: 1,
			name: "白糠町",
		},
		{
			prefecture_id: 1,
			name: "別海町",
		},
		{
			prefecture_id: 1,
			name: "中標津町",
		},
		{
			prefecture_id: 1,
			name: "標津町",
		},
		{
			prefecture_id: 1,
			name: "羅臼町",
		},
		{
			prefecture_id: 1,
			name: "色丹村",
		},
		{
			prefecture_id: 1,
			name: "国後郡泊村",
		},
		{
			prefecture_id: 1,
			name: "留夜別村",
		},
		{
			prefecture_id: 1,
			name: "留別村",
		},
		{
			prefecture_id: 1,
			name: "紗那村",
		},
		{
			prefecture_id: 1,
			name: "蘂取村",
		},
		{
			prefecture_id: 2,
			name: "青森市",
		},
		{
			prefecture_id: 2,
			name: "弘前市",
		},
		{
			prefecture_id: 2,
			name: "八戸市",
		},
		{
			prefecture_id: 2,
			name: "黒石市",
		},
		{
			prefecture_id: 2,
			name: "五所川原市",
		},
		{
			prefecture_id: 2,
			name: "十和田市",
		},
		{
			prefecture_id: 2,
			name: "三沢市",
		},
		{
			prefecture_id: 2,
			name: "むつ市",
		},
		{
			prefecture_id: 2,
			name: "つがる市",
		},
		{
			prefecture_id: 2,
			name: "平川市",
		},
		{
			prefecture_id: 2,
			name: "平内町",
		},
		{
			prefecture_id: 2,
			name: "今別町",
		},
		{
			prefecture_id: 2,
			name: "蓬田村",
		},
		{
			prefecture_id: 2,
			name: "外ヶ浜町",
		},
		{
			prefecture_id: 2,
			name: "鰺ヶ沢町",
		},
		{
			prefecture_id: 2,
			name: "深浦町",
		},
		{
			prefecture_id: 2,
			name: "西目屋村",
		},
		{
			prefecture_id: 2,
			name: "藤崎町",
		},
		{
			prefecture_id: 2,
			name: "大鰐町",
		},
		{
			prefecture_id: 2,
			name: "田舎館村",
		},
		{
			prefecture_id: 2,
			name: "板柳町",
		},
		{
			prefecture_id: 2,
			name: "鶴田町",
		},
		{
			prefecture_id: 2,
			name: "中泊町",
		},
		{
			prefecture_id: 2,
			name: "野辺地町",
		},
		{
			prefecture_id: 2,
			name: "七戸町",
		},
		{
			prefecture_id: 2,
			name: "六戸町",
		},
		{
			prefecture_id: 2,
			name: "横浜町",
		},
		{
			prefecture_id: 2,
			name: "東北町",
		},
		{
			prefecture_id: 2,
			name: "六ヶ所村",
		},
		{
			prefecture_id: 2,
			name: "おいらせ町",
		},
		{
			prefecture_id: 2,
			name: "大間町",
		},
		{
			prefecture_id: 2,
			name: "東通村",
		},
		{
			prefecture_id: 2,
			name: "風間浦村",
		},
		{
			prefecture_id: 2,
			name: "佐井村",
		},
		{
			prefecture_id: 2,
			name: "三戸町",
		},
		{
			prefecture_id: 2,
			name: "五戸町",
		},
		{
			prefecture_id: 2,
			name: "田子町",
		},
		{
			prefecture_id: 2,
			name: "南部町",
		},
		{
			prefecture_id: 2,
			name: "階上町",
		},
		{
			prefecture_id: 2,
			name: "新郷村",
		},
		{
			prefecture_id: 3,
			name: "盛岡市",
		},
		{
			prefecture_id: 3,
			name: "宮古市",
		},
		{
			prefecture_id: 3,
			name: "大船渡市",
		},
		{
			prefecture_id: 3,
			name: "花巻市",
		},
		{
			prefecture_id: 3,
			name: "北上市",
		},
		{
			prefecture_id: 3,
			name: "久慈市",
		},
		{
			prefecture_id: 3,
			name: "遠野市",
		},
		{
			prefecture_id: 3,
			name: "一関市",
		},
		{
			prefecture_id: 3,
			name: "陸前高田市",
		},
		{
			prefecture_id: 3,
			name: "釜石市",
		},
		{
			prefecture_id: 3,
			name: "二戸市",
		},
		{
			prefecture_id: 3,
			name: "八幡平市",
		},
		{
			prefecture_id: 3,
			name: "奥州市",
		},
		{
			prefecture_id: 3,
			name: "滝沢市",
		},
		{
			prefecture_id: 3,
			name: "雫石町",
		},
		{
			prefecture_id: 3,
			name: "葛巻町",
		},
		{
			prefecture_id: 3,
			name: "岩手町",
		},
		{
			prefecture_id: 3,
			name: "紫波町",
		},
		{
			prefecture_id: 3,
			name: "矢巾町",
		},
		{
			prefecture_id: 3,
			name: "西和賀町",
		},
		{
			prefecture_id: 3,
			name: "金ケ崎町",
		},
		{
			prefecture_id: 3,
			name: "平泉町",
		},
		{
			prefecture_id: 3,
			name: "住田町",
		},
		{
			prefecture_id: 3,
			name: "大槌町",
		},
		{
			prefecture_id: 3,
			name: "山田町",
		},
		{
			prefecture_id: 3,
			name: "岩泉町",
		},
		{
			prefecture_id: 3,
			name: "田野畑村",
		},
		{
			prefecture_id: 3,
			name: "普代村",
		},
		{
			prefecture_id: 3,
			name: "軽米町",
		},
		{
			prefecture_id: 3,
			name: "野田村",
		},
		{
			prefecture_id: 3,
			name: "九戸村",
		},
		{
			prefecture_id: 3,
			name: "洋野町",
		},
		{
			prefecture_id: 3,
			name: "一戸町",
		},
		{
			prefecture_id: 4,
			name: "仙台市",
		},
		{
			prefecture_id: 4,
			name: "仙台市青葉区",
		},
		{
			prefecture_id: 4,
			name: "仙台市宮城野区",
		},
		{
			prefecture_id: 4,
			name: "仙台市若林区",
		},
		{
			prefecture_id: 4,
			name: "仙台市太白区",
		},
		{
			prefecture_id: 4,
			name: "仙台市泉区",
		},
		{
			prefecture_id: 4,
			name: "石巻市",
		},
		{
			prefecture_id: 4,
			name: "塩竈市",
		},
		{
			prefecture_id: 4,
			name: "気仙沼市",
		},
		{
			prefecture_id: 4,
			name: "白石市",
		},
		{
			prefecture_id: 4,
			name: "名取市",
		},
		{
			prefecture_id: 4,
			name: "角田市",
		},
		{
			prefecture_id: 4,
			name: "多賀城市",
		},
		{
			prefecture_id: 4,
			name: "岩沼市",
		},
		{
			prefecture_id: 4,
			name: "登米市",
		},
		{
			prefecture_id: 4,
			name: "栗原市",
		},
		{
			prefecture_id: 4,
			name: "東松島市",
		},
		{
			prefecture_id: 4,
			name: "大崎市",
		},
		{
			prefecture_id: 4,
			name: "富谷市",
		},
		{
			prefecture_id: 4,
			name: "蔵王町",
		},
		{
			prefecture_id: 4,
			name: "七ヶ宿町",
		},
		{
			prefecture_id: 4,
			name: "大河原町",
		},
		{
			prefecture_id: 4,
			name: "村田町",
		},
		{
			prefecture_id: 4,
			name: "柴田町",
		},
		{
			prefecture_id: 4,
			name: "川崎町",
		},
		{
			prefecture_id: 4,
			name: "丸森町",
		},
		{
			prefecture_id: 4,
			name: "亘理町",
		},
		{
			prefecture_id: 4,
			name: "山元町",
		},
		{
			prefecture_id: 4,
			name: "松島町",
		},
		{
			prefecture_id: 4,
			name: "七ヶ浜町",
		},
		{
			prefecture_id: 4,
			name: "利府町",
		},
		{
			prefecture_id: 4,
			name: "大和町",
		},
		{
			prefecture_id: 4,
			name: "大郷町",
		},
		{
			prefecture_id: 4,
			name: "大衡村",
		},
		{
			prefecture_id: 4,
			name: "色麻町",
		},
		{
			prefecture_id: 4,
			name: "加美町",
		},
		{
			prefecture_id: 4,
			name: "涌谷町",
		},
		{
			prefecture_id: 4,
			name: "美里町",
		},
		{
			prefecture_id: 4,
			name: "女川町",
		},
		{
			prefecture_id: 4,
			name: "南三陸町",
		},
		{
			prefecture_id: 5,
			name: "秋田市",
		},
		{
			prefecture_id: 5,
			name: "能代市",
		},
		{
			prefecture_id: 5,
			name: "横手市",
		},
		{
			prefecture_id: 5,
			name: "大館市",
		},
		{
			prefecture_id: 5,
			name: "男鹿市",
		},
		{
			prefecture_id: 5,
			name: "湯沢市",
		},
		{
			prefecture_id: 5,
			name: "鹿角市",
		},
		{
			prefecture_id: 5,
			name: "由利本荘市",
		},
		{
			prefecture_id: 5,
			name: "潟上市",
		},
		{
			prefecture_id: 5,
			name: "大仙市",
		},
		{
			prefecture_id: 5,
			name: "北秋田市",
		},
		{
			prefecture_id: 5,
			name: "にかほ市",
		},
		{
			prefecture_id: 5,
			name: "仙北市",
		},
		{
			prefecture_id: 5,
			name: "小坂町",
		},
		{
			prefecture_id: 5,
			name: "上小阿仁村",
		},
		{
			prefecture_id: 5,
			name: "藤里町",
		},
		{
			prefecture_id: 5,
			name: "三種町",
		},
		{
			prefecture_id: 5,
			name: "八峰町",
		},
		{
			prefecture_id: 5,
			name: "五城目町",
		},
		{
			prefecture_id: 5,
			name: "八郎潟町",
		},
		{
			prefecture_id: 5,
			name: "井川町",
		},
		{
			prefecture_id: 5,
			name: "大潟村",
		},
		{
			prefecture_id: 5,
			name: "美郷町",
		},
		{
			prefecture_id: 5,
			name: "羽後町",
		},
		{
			prefecture_id: 5,
			name: "東成瀬村",
		},
		{
			prefecture_id: 6,
			name: "山形市",
		},
		{
			prefecture_id: 6,
			name: "米沢市",
		},
		{
			prefecture_id: 6,
			name: "鶴岡市",
		},
		{
			prefecture_id: 6,
			name: "酒田市",
		},
		{
			prefecture_id: 6,
			name: "新庄市",
		},
		{
			prefecture_id: 6,
			name: "寒河江市",
		},
		{
			prefecture_id: 6,
			name: "上山市",
		},
		{
			prefecture_id: 6,
			name: "村山市",
		},
		{
			prefecture_id: 6,
			name: "長井市",
		},
		{
			prefecture_id: 6,
			name: "天童市",
		},
		{
			prefecture_id: 6,
			name: "東根市",
		},
		{
			prefecture_id: 6,
			name: "尾花沢市",
		},
		{
			prefecture_id: 6,
			name: "南陽市",
		},
		{
			prefecture_id: 6,
			name: "山辺町",
		},
		{
			prefecture_id: 6,
			name: "中山町",
		},
		{
			prefecture_id: 6,
			name: "河北町",
		},
		{
			prefecture_id: 6,
			name: "西川町",
		},
		{
			prefecture_id: 6,
			name: "朝日町",
		},
		{
			prefecture_id: 6,
			name: "大江町",
		},
		{
			prefecture_id: 6,
			name: "大石田町",
		},
		{
			prefecture_id: 6,
			name: "金山町",
		},
		{
			prefecture_id: 6,
			name: "最上町",
		},
		{
			prefecture_id: 6,
			name: "舟形町",
		},
		{
			prefecture_id: 6,
			name: "真室川町",
		},
		{
			prefecture_id: 6,
			name: "大蔵村",
		},
		{
			prefecture_id: 6,
			name: "鮭川村",
		},
		{
			prefecture_id: 6,
			name: "戸沢村",
		},
		{
			prefecture_id: 6,
			name: "高畠町",
		},
		{
			prefecture_id: 6,
			name: "川西町",
		},
		{
			prefecture_id: 6,
			name: "小国町",
		},
		{
			prefecture_id: 6,
			name: "白鷹町",
		},
		{
			prefecture_id: 6,
			name: "飯豊町",
		},
		{
			prefecture_id: 6,
			name: "三川町",
		},
		{
			prefecture_id: 6,
			name: "庄内町",
		},
		{
			prefecture_id: 6,
			name: "遊佐町",
		},
		{
			prefecture_id: 7,
			name: "福島市",
		},
		{
			prefecture_id: 7,
			name: "会津若松市",
		},
		{
			prefecture_id: 7,
			name: "郡山市",
		},
		{
			prefecture_id: 7,
			name: "いわき市",
		},
		{
			prefecture_id: 7,
			name: "白河市",
		},
		{
			prefecture_id: 7,
			name: "須賀川市",
		},
		{
			prefecture_id: 7,
			name: "喜多方市",
		},
		{
			prefecture_id: 7,
			name: "相馬市",
		},
		{
			prefecture_id: 7,
			name: "二本松市",
		},
		{
			prefecture_id: 7,
			name: "田村市",
		},
		{
			prefecture_id: 7,
			name: "南相馬市",
		},
		{
			prefecture_id: 7,
			name: "伊達市",
		},
		{
			prefecture_id: 7,
			name: "本宮市",
		},
		{
			prefecture_id: 7,
			name: "桑折町",
		},
		{
			prefecture_id: 7,
			name: "国見町",
		},
		{
			prefecture_id: 7,
			name: "川俣町",
		},
		{
			prefecture_id: 7,
			name: "大玉村",
		},
		{
			prefecture_id: 7,
			name: "鏡石町",
		},
		{
			prefecture_id: 7,
			name: "天栄村",
		},
		{
			prefecture_id: 7,
			name: "下郷町",
		},
		{
			prefecture_id: 7,
			name: "檜枝岐村",
		},
		{
			prefecture_id: 7,
			name: "只見町",
		},
		{
			prefecture_id: 7,
			name: "南会津町",
		},
		{
			prefecture_id: 7,
			name: "北塩原村",
		},
		{
			prefecture_id: 7,
			name: "西会津町",
		},
		{
			prefecture_id: 7,
			name: "磐梯町",
		},
		{
			prefecture_id: 7,
			name: "猪苗代町",
		},
		{
			prefecture_id: 7,
			name: "会津坂下町",
		},
		{
			prefecture_id: 7,
			name: "湯川村",
		},
		{
			prefecture_id: 7,
			name: "柳津町",
		},
		{
			prefecture_id: 7,
			name: "三島町",
		},
		{
			prefecture_id: 7,
			name: "金山町",
		},
		{
			prefecture_id: 7,
			name: "昭和村",
		},
		{
			prefecture_id: 7,
			name: "会津美里町",
		},
		{
			prefecture_id: 7,
			name: "西郷村",
		},
		{
			prefecture_id: 7,
			name: "泉崎村",
		},
		{
			prefecture_id: 7,
			name: "中島村",
		},
		{
			prefecture_id: 7,
			name: "矢吹町",
		},
		{
			prefecture_id: 7,
			name: "棚倉町",
		},
		{
			prefecture_id: 7,
			name: "矢祭町",
		},
		{
			prefecture_id: 7,
			name: "塙町",
		},
		{
			prefecture_id: 7,
			name: "鮫川村",
		},
		{
			prefecture_id: 7,
			name: "石川町",
		},
		{
			prefecture_id: 7,
			name: "玉川村",
		},
		{
			prefecture_id: 7,
			name: "平田村",
		},
		{
			prefecture_id: 7,
			name: "浅川町",
		},
		{
			prefecture_id: 7,
			name: "古殿町",
		},
		{
			prefecture_id: 7,
			name: "三春町",
		},
		{
			prefecture_id: 7,
			name: "小野町",
		},
		{
			prefecture_id: 7,
			name: "広野町",
		},
		{
			prefecture_id: 7,
			name: "楢葉町",
		},
		{
			prefecture_id: 7,
			name: "富岡町",
		},
		{
			prefecture_id: 7,
			name: "川内村",
		},
		{
			prefecture_id: 7,
			name: "大熊町",
		},
		{
			prefecture_id: 7,
			name: "双葉町",
		},
		{
			prefecture_id: 7,
			name: "浪江町",
		},
		{
			prefecture_id: 7,
			name: "葛尾村",
		},
		{
			prefecture_id: 7,
			name: "新地町",
		},
		{
			prefecture_id: 7,
			name: "飯舘村",
		},
		{
			prefecture_id: 8,
			name: "水戸市",
		},
		{
			prefecture_id: 8,
			name: "日立市",
		},
		{
			prefecture_id: 8,
			name: "土浦市",
		},
		{
			prefecture_id: 8,
			name: "古河市",
		},
		{
			prefecture_id: 8,
			name: "石岡市",
		},
		{
			prefecture_id: 8,
			name: "結城市",
		},
		{
			prefecture_id: 8,
			name: "龍ケ崎市",
		},
		{
			prefecture_id: 8,
			name: "下妻市",
		},
		{
			prefecture_id: 8,
			name: "常総市",
		},
		{
			prefecture_id: 8,
			name: "常陸太田市",
		},
		{
			prefecture_id: 8,
			name: "高萩市",
		},
		{
			prefecture_id: 8,
			name: "北茨城市",
		},
		{
			prefecture_id: 8,
			name: "笠間市",
		},
		{
			prefecture_id: 8,
			name: "取手市",
		},
		{
			prefecture_id: 8,
			name: "牛久市",
		},
		{
			prefecture_id: 8,
			name: "つくば市",
		},
		{
			prefecture_id: 8,
			name: "ひたちなか市",
		},
		{
			prefecture_id: 8,
			name: "鹿嶋市",
		},
		{
			prefecture_id: 8,
			name: "潮来市",
		},
		{
			prefecture_id: 8,
			name: "守谷市",
		},
		{
			prefecture_id: 8,
			name: "常陸大宮市",
		},
		{
			prefecture_id: 8,
			name: "那珂市",
		},
		{
			prefecture_id: 8,
			name: "筑西市",
		},
		{
			prefecture_id: 8,
			name: "坂東市",
		},
		{
			prefecture_id: 8,
			name: "稲敷市",
		},
		{
			prefecture_id: 8,
			name: "かすみがうら市",
		},
		{
			prefecture_id: 8,
			name: "桜川市",
		},
		{
			prefecture_id: 8,
			name: "神栖市",
		},
		{
			prefecture_id: 8,
			name: "行方市",
		},
		{
			prefecture_id: 8,
			name: "鉾田市",
		},
		{
			prefecture_id: 8,
			name: "つくばみらい市",
		},
		{
			prefecture_id: 8,
			name: "小美玉市",
		},
		{
			prefecture_id: 8,
			name: "茨城町",
		},
		{
			prefecture_id: 8,
			name: "大洗町",
		},
		{
			prefecture_id: 8,
			name: "城里町",
		},
		{
			prefecture_id: 8,
			name: "東海村",
		},
		{
			prefecture_id: 8,
			name: "大子町",
		},
		{
			prefecture_id: 8,
			name: "美浦村",
		},
		{
			prefecture_id: 8,
			name: "阿見町",
		},
		{
			prefecture_id: 8,
			name: "河内町",
		},
		{
			prefecture_id: 8,
			name: "八千代町",
		},
		{
			prefecture_id: 8,
			name: "五霞町",
		},
		{
			prefecture_id: 8,
			name: "境町",
		},
		{
			prefecture_id: 8,
			name: "利根町",
		},
		{
			prefecture_id: 9,
			name: "宇都宮市",
		},
		{
			prefecture_id: 9,
			name: "足利市",
		},
		{
			prefecture_id: 9,
			name: "栃木市",
		},
		{
			prefecture_id: 9,
			name: "佐野市",
		},
		{
			prefecture_id: 9,
			name: "鹿沼市",
		},
		{
			prefecture_id: 9,
			name: "日光市",
		},
		{
			prefecture_id: 9,
			name: "小山市",
		},
		{
			prefecture_id: 9,
			name: "真岡市",
		},
		{
			prefecture_id: 9,
			name: "大田原市",
		},
		{
			prefecture_id: 9,
			name: "矢板市",
		},
		{
			prefecture_id: 9,
			name: "那須塩原市",
		},
		{
			prefecture_id: 9,
			name: "さくら市",
		},
		{
			prefecture_id: 9,
			name: "那須烏山市",
		},
		{
			prefecture_id: 9,
			name: "下野市",
		},
		{
			prefecture_id: 9,
			name: "上三川町",
		},
		{
			prefecture_id: 9,
			name: "益子町",
		},
		{
			prefecture_id: 9,
			name: "茂木町",
		},
		{
			prefecture_id: 9,
			name: "市貝町",
		},
		{
			prefecture_id: 9,
			name: "芳賀町",
		},
		{
			prefecture_id: 9,
			name: "壬生町",
		},
		{
			prefecture_id: 9,
			name: "野木町",
		},
		{
			prefecture_id: 9,
			name: "塩谷町",
		},
		{
			prefecture_id: 9,
			name: "高根沢町",
		},
		{
			prefecture_id: 9,
			name: "那須町",
		},
		{
			prefecture_id: 9,
			name: "那珂川町",
		},
		{
			prefecture_id: 10,
			name: "前橋市",
		},
		{
			prefecture_id: 10,
			name: "高崎市",
		},
		{
			prefecture_id: 10,
			name: "桐生市",
		},
		{
			prefecture_id: 10,
			name: "伊勢崎市",
		},
		{
			prefecture_id: 10,
			name: "太田市",
		},
		{
			prefecture_id: 10,
			name: "沼田市",
		},
		{
			prefecture_id: 10,
			name: "館林市",
		},
		{
			prefecture_id: 10,
			name: "渋川市",
		},
		{
			prefecture_id: 10,
			name: "藤岡市",
		},
		{
			prefecture_id: 10,
			name: "富岡市",
		},
		{
			prefecture_id: 10,
			name: "安中市",
		},
		{
			prefecture_id: 10,
			name: "みどり市",
		},
		{
			prefecture_id: 10,
			name: "榛東村",
		},
		{
			prefecture_id: 10,
			name: "吉岡町",
		},
		{
			prefecture_id: 10,
			name: "上野村",
		},
		{
			prefecture_id: 10,
			name: "神流町",
		},
		{
			prefecture_id: 10,
			name: "下仁田町",
		},
		{
			prefecture_id: 10,
			name: "南牧村",
		},
		{
			prefecture_id: 10,
			name: "甘楽町",
		},
		{
			prefecture_id: 10,
			name: "中之条町",
		},
		{
			prefecture_id: 10,
			name: "長野原町",
		},
		{
			prefecture_id: 10,
			name: "嬬恋村",
		},
		{
			prefecture_id: 10,
			name: "草津町",
		},
		{
			prefecture_id: 10,
			name: "高山村",
		},
		{
			prefecture_id: 10,
			name: "東吾妻町",
		},
		{
			prefecture_id: 10,
			name: "片品村",
		},
		{
			prefecture_id: 10,
			name: "川場村",
		},
		{
			prefecture_id: 10,
			name: "昭和村",
		},
		{
			prefecture_id: 10,
			name: "みなかみ町",
		},
		{
			prefecture_id: 10,
			name: "玉村町",
		},
		{
			prefecture_id: 10,
			name: "板倉町",
		},
		{
			prefecture_id: 10,
			name: "明和町",
		},
		{
			prefecture_id: 10,
			name: "千代田町",
		},
		{
			prefecture_id: 10,
			name: "大泉町",
		},
		{
			prefecture_id: 10,
			name: "邑楽町",
		},
		{
			prefecture_id: 11,
			name: "さいたま市",
		},
		{
			prefecture_id: 11,
			name: "さいたま市西区",
		},
		{
			prefecture_id: 11,
			name: "さいたま市北区",
		},
		{
			prefecture_id: 11,
			name: "さいたま市大宮区",
		},
		{
			prefecture_id: 11,
			name: "さいたま市見沼区",
		},
		{
			prefecture_id: 11,
			name: "さいたま市中央区",
		},
		{
			prefecture_id: 11,
			name: "さいたま市桜区",
		},
		{
			prefecture_id: 11,
			name: "さいたま市浦和区",
		},
		{
			prefecture_id: 11,
			name: "さいたま市南区",
		},
		{
			prefecture_id: 11,
			name: "さいたま市緑区",
		},
		{
			prefecture_id: 11,
			name: "さいたま市岩槻区",
		},
		{
			prefecture_id: 11,
			name: "川越市",
		},
		{
			prefecture_id: 11,
			name: "熊谷市",
		},
		{
			prefecture_id: 11,
			name: "川口市",
		},
		{
			prefecture_id: 11,
			name: "行田市",
		},
		{
			prefecture_id: 11,
			name: "秩父市",
		},
		{
			prefecture_id: 11,
			name: "所沢市",
		},
		{
			prefecture_id: 11,
			name: "飯能市",
		},
		{
			prefecture_id: 11,
			name: "加須市",
		},
		{
			prefecture_id: 11,
			name: "本庄市",
		},
		{
			prefecture_id: 11,
			name: "東松山市",
		},
		{
			prefecture_id: 11,
			name: "春日部市",
		},
		{
			prefecture_id: 11,
			name: "狭山市",
		},
		{
			prefecture_id: 11,
			name: "羽生市",
		},
		{
			prefecture_id: 11,
			name: "鴻巣市",
		},
		{
			prefecture_id: 11,
			name: "深谷市",
		},
		{
			prefecture_id: 11,
			name: "上尾市",
		},
		{
			prefecture_id: 11,
			name: "草加市",
		},
		{
			prefecture_id: 11,
			name: "越谷市",
		},
		{
			prefecture_id: 11,
			name: "蕨市",
		},
		{
			prefecture_id: 11,
			name: "戸田市",
		},
		{
			prefecture_id: 11,
			name: "入間市",
		},
		{
			prefecture_id: 11,
			name: "朝霞市",
		},
		{
			prefecture_id: 11,
			name: "志木市",
		},
		{
			prefecture_id: 11,
			name: "和光市",
		},
		{
			prefecture_id: 11,
			name: "新座市",
		},
		{
			prefecture_id: 11,
			name: "桶川市",
		},
		{
			prefecture_id: 11,
			name: "久喜市",
		},
		{
			prefecture_id: 11,
			name: "北本市",
		},
		{
			prefecture_id: 11,
			name: "八潮市",
		},
		{
			prefecture_id: 11,
			name: "富士見市",
		},
		{
			prefecture_id: 11,
			name: "三郷市",
		},
		{
			prefecture_id: 11,
			name: "蓮田市",
		},
		{
			prefecture_id: 11,
			name: "坂戸市",
		},
		{
			prefecture_id: 11,
			name: "幸手市",
		},
		{
			prefecture_id: 11,
			name: "鶴ヶ島市",
		},
		{
			prefecture_id: 11,
			name: "日高市",
		},
		{
			prefecture_id: 11,
			name: "吉川市",
		},
		{
			prefecture_id: 11,
			name: "ふじみ野市",
		},
		{
			prefecture_id: 11,
			name: "白岡市",
		},
		{
			prefecture_id: 11,
			name: "伊奈町",
		},
		{
			prefecture_id: 11,
			name: "三芳町",
		},
		{
			prefecture_id: 11,
			name: "毛呂山町",
		},
		{
			prefecture_id: 11,
			name: "越生町",
		},
		{
			prefecture_id: 11,
			name: "滑川町",
		},
		{
			prefecture_id: 11,
			name: "嵐山町",
		},
		{
			prefecture_id: 11,
			name: "小川町",
		},
		{
			prefecture_id: 11,
			name: "川島町",
		},
		{
			prefecture_id: 11,
			name: "吉見町",
		},
		{
			prefecture_id: 11,
			name: "鳩山町",
		},
		{
			prefecture_id: 11,
			name: "ときがわ町",
		},
		{
			prefecture_id: 11,
			name: "横瀬町",
		},
		{
			prefecture_id: 11,
			name: "皆野町",
		},
		{
			prefecture_id: 11,
			name: "長瀞町",
		},
		{
			prefecture_id: 11,
			name: "小鹿野町",
		},
		{
			prefecture_id: 11,
			name: "東秩父村",
		},
		{
			prefecture_id: 11,
			name: "美里町",
		},
		{
			prefecture_id: 11,
			name: "神川町",
		},
		{
			prefecture_id: 11,
			name: "上里町",
		},
		{
			prefecture_id: 11,
			name: "寄居町",
		},
		{
			prefecture_id: 11,
			name: "宮代町",
		},
		{
			prefecture_id: 11,
			name: "杉戸町",
		},
		{
			prefecture_id: 11,
			name: "松伏町",
		},
		{
			prefecture_id: 12,
			name: "千葉市",
		},
		{
			prefecture_id: 12,
			name: "千葉市中央区",
		},
		{
			prefecture_id: 12,
			name: "千葉市花見川区",
		},
		{
			prefecture_id: 12,
			name: "千葉市稲毛区",
		},
		{
			prefecture_id: 12,
			name: "千葉市若葉区",
		},
		{
			prefecture_id: 12,
			name: "千葉市緑区",
		},
		{
			prefecture_id: 12,
			name: "千葉市美浜区",
		},
		{
			prefecture_id: 12,
			name: "銚子市",
		},
		{
			prefecture_id: 12,
			name: "市川市",
		},
		{
			prefecture_id: 12,
			name: "船橋市",
		},
		{
			prefecture_id: 12,
			name: "館山市",
		},
		{
			prefecture_id: 12,
			name: "木更津市",
		},
		{
			prefecture_id: 12,
			name: "松戸市",
		},
		{
			prefecture_id: 12,
			name: "野田市",
		},
		{
			prefecture_id: 12,
			name: "茂原市",
		},
		{
			prefecture_id: 12,
			name: "成田市",
		},
		{
			prefecture_id: 12,
			name: "佐倉市",
		},
		{
			prefecture_id: 12,
			name: "東金市",
		},
		{
			prefecture_id: 12,
			name: "旭市",
		},
		{
			prefecture_id: 12,
			name: "習志野市",
		},
		{
			prefecture_id: 12,
			name: "柏市",
		},
		{
			prefecture_id: 12,
			name: "勝浦市",
		},
		{
			prefecture_id: 12,
			name: "市原市",
		},
		{
			prefecture_id: 12,
			name: "流山市",
		},
		{
			prefecture_id: 12,
			name: "八千代市",
		},
		{
			prefecture_id: 12,
			name: "我孫子市",
		},
		{
			prefecture_id: 12,
			name: "鴨川市",
		},
		{
			prefecture_id: 12,
			name: "鎌ケ谷市",
		},
		{
			prefecture_id: 12,
			name: "君津市",
		},
		{
			prefecture_id: 12,
			name: "富津市",
		},
		{
			prefecture_id: 12,
			name: "浦安市",
		},
		{
			prefecture_id: 12,
			name: "四街道市",
		},
		{
			prefecture_id: 12,
			name: "袖ケ浦市",
		},
		{
			prefecture_id: 12,
			name: "八街市",
		},
		{
			prefecture_id: 12,
			name: "印西市",
		},
		{
			prefecture_id: 12,
			name: "白井市",
		},
		{
			prefecture_id: 12,
			name: "富里市",
		},
		{
			prefecture_id: 12,
			name: "南房総市",
		},
		{
			prefecture_id: 12,
			name: "匝瑳市",
		},
		{
			prefecture_id: 12,
			name: "香取市",
		},
		{
			prefecture_id: 12,
			name: "山武市",
		},
		{
			prefecture_id: 12,
			name: "いすみ市",
		},
		{
			prefecture_id: 12,
			name: "大網白里市",
		},
		{
			prefecture_id: 12,
			name: "酒々井町",
		},
		{
			prefecture_id: 12,
			name: "栄町",
		},
		{
			prefecture_id: 12,
			name: "神崎町",
		},
		{
			prefecture_id: 12,
			name: "多古町",
		},
		{
			prefecture_id: 12,
			name: "東庄町",
		},
		{
			prefecture_id: 12,
			name: "九十九里町",
		},
		{
			prefecture_id: 12,
			name: "芝山町",
		},
		{
			prefecture_id: 12,
			name: "横芝光町",
		},
		{
			prefecture_id: 12,
			name: "一宮町",
		},
		{
			prefecture_id: 12,
			name: "睦沢町",
		},
		{
			prefecture_id: 12,
			name: "長生村",
		},
		{
			prefecture_id: 12,
			name: "白子町",
		},
		{
			prefecture_id: 12,
			name: "長柄町",
		},
		{
			prefecture_id: 12,
			name: "長南町",
		},
		{
			prefecture_id: 12,
			name: "大多喜町",
		},
		{
			prefecture_id: 12,
			name: "御宿町",
		},
		{
			prefecture_id: 12,
			name: "鋸南町",
		},
		{
			prefecture_id: 13,
			name: "千代田区",
		},
		{
			prefecture_id: 13,
			name: "中央区",
		},
		{
			prefecture_id: 13,
			name: "港区",
		},
		{
			prefecture_id: 13,
			name: "新宿区",
		},
		{
			prefecture_id: 13,
			name: "文京区",
		},
		{
			prefecture_id: 13,
			name: "台東区",
		},
		{
			prefecture_id: 13,
			name: "墨田区",
		},
		{
			prefecture_id: 13,
			name: "江東区",
		},
		{
			prefecture_id: 13,
			name: "品川区",
		},
		{
			prefecture_id: 13,
			name: "目黒区",
		},
		{
			prefecture_id: 13,
			name: "大田区",
		},
		{
			prefecture_id: 13,
			name: "世田谷区",
		},
		{
			prefecture_id: 13,
			name: "渋谷区",
		},
		{
			prefecture_id: 13,
			name: "中野区",
		},
		{
			prefecture_id: 13,
			name: "杉並区",
		},
		{
			prefecture_id: 13,
			name: "豊島区",
		},
		{
			prefecture_id: 13,
			name: "北区",
		},
		{
			prefecture_id: 13,
			name: "荒川区",
		},
		{
			prefecture_id: 13,
			name: "板橋区",
		},
		{
			prefecture_id: 13,
			name: "練馬区",
		},
		{
			prefecture_id: 13,
			name: "足立区",
		},
		{
			prefecture_id: 13,
			name: "葛飾区",
		},
		{
			prefecture_id: 13,
			name: "江戸川区",
		},
		{
			prefecture_id: 13,
			name: "八王子市",
		},
		{
			prefecture_id: 13,
			name: "立川市",
		},
		{
			prefecture_id: 13,
			name: "武蔵野市",
		},
		{
			prefecture_id: 13,
			name: "三鷹市",
		},
		{
			prefecture_id: 13,
			name: "青梅市",
		},
		{
			prefecture_id: 13,
			name: "府中市",
		},
		{
			prefecture_id: 13,
			name: "昭島市",
		},
		{
			prefecture_id: 13,
			name: "調布市",
		},
		{
			prefecture_id: 13,
			name: "町田市",
		},
		{
			prefecture_id: 13,
			name: "小金井市",
		},
		{
			prefecture_id: 13,
			name: "小平市",
		},
		{
			prefecture_id: 13,
			name: "日野市",
		},
		{
			prefecture_id: 13,
			name: "東村山市",
		},
		{
			prefecture_id: 13,
			name: "国分寺市",
		},
		{
			prefecture_id: 13,
			name: "国立市",
		},
		{
			prefecture_id: 13,
			name: "福生市",
		},
		{
			prefecture_id: 13,
			name: "狛江市",
		},
		{
			prefecture_id: 13,
			name: "東大和市",
		},
		{
			prefecture_id: 13,
			name: "清瀬市",
		},
		{
			prefecture_id: 13,
			name: "東久留米市",
		},
		{
			prefecture_id: 13,
			name: "武蔵村山市",
		},
		{
			prefecture_id: 13,
			name: "多摩市",
		},
		{
			prefecture_id: 13,
			name: "稲城市",
		},
		{
			prefecture_id: 13,
			name: "羽村市",
		},
		{
			prefecture_id: 13,
			name: "あきる野市",
		},
		{
			prefecture_id: 13,
			name: "西東京市",
		},
		{
			prefecture_id: 13,
			name: "瑞穂町",
		},
		{
			prefecture_id: 13,
			name: "日の出町",
		},
		{
			prefecture_id: 13,
			name: "檜原村",
		},
		{
			prefecture_id: 13,
			name: "奥多摩町",
		},
		{
			prefecture_id: 13,
			name: "大島町",
		},
		{
			prefecture_id: 13,
			name: "利島村",
		},
		{
			prefecture_id: 13,
			name: "新島村",
		},
		{
			prefecture_id: 13,
			name: "神津島村",
		},
		{
			prefecture_id: 13,
			name: "三宅村",
		},
		{
			prefecture_id: 13,
			name: "御蔵島村",
		},
		{
			prefecture_id: 13,
			name: "八丈町",
		},
		{
			prefecture_id: 13,
			name: "青ヶ島村",
		},
		{
			prefecture_id: 13,
			name: "小笠原村",
		},
		{
			prefecture_id: 14,
			name: "横浜市",
		},
		{
			prefecture_id: 14,
			name: "横浜市鶴見区",
		},
		{
			prefecture_id: 14,
			name: "横浜市神奈川区",
		},
		{
			prefecture_id: 14,
			name: "横浜市西区",
		},
		{
			prefecture_id: 14,
			name: "横浜市中区",
		},
		{
			prefecture_id: 14,
			name: "横浜市南区",
		},
		{
			prefecture_id: 14,
			name: "横浜市保土ケ谷区",
		},
		{
			prefecture_id: 14,
			name: "横浜市磯子区",
		},
		{
			prefecture_id: 14,
			name: "横浜市金沢区",
		},
		{
			prefecture_id: 14,
			name: "横浜市港北区",
		},
		{
			prefecture_id: 14,
			name: "横浜市戸塚区",
		},
		{
			prefecture_id: 14,
			name: "横浜市港南区",
		},
		{
			prefecture_id: 14,
			name: "横浜市旭区",
		},
		{
			prefecture_id: 14,
			name: "横浜市緑区",
		},
		{
			prefecture_id: 14,
			name: "横浜市瀬谷区",
		},
		{
			prefecture_id: 14,
			name: "横浜市栄区",
		},
		{
			prefecture_id: 14,
			name: "横浜市泉区",
		},
		{
			prefecture_id: 14,
			name: "横浜市青葉区",
		},
		{
			prefecture_id: 14,
			name: "横浜市都筑区",
		},
		{
			prefecture_id: 14,
			name: "川崎市",
		},
		{
			prefecture_id: 14,
			name: "川崎市川崎区",
		},
		{
			prefecture_id: 14,
			name: "川崎市幸区",
		},
		{
			prefecture_id: 14,
			name: "川崎市中原区",
		},
		{
			prefecture_id: 14,
			name: "川崎市高津区",
		},
		{
			prefecture_id: 14,
			name: "川崎市多摩区",
		},
		{
			prefecture_id: 14,
			name: "川崎市宮前区",
		},
		{
			prefecture_id: 14,
			name: "川崎市麻生区",
		},
		{
			prefecture_id: 14,
			name: "相模原市",
		},
		{
			prefecture_id: 14,
			name: "相模原市緑区",
		},
		{
			prefecture_id: 14,
			name: "相模原市中央区",
		},
		{
			prefecture_id: 14,
			name: "相模原市南区",
		},
		{
			prefecture_id: 14,
			name: "横須賀市",
		},
		{
			prefecture_id: 14,
			name: "平塚市",
		},
		{
			prefecture_id: 14,
			name: "鎌倉市",
		},
		{
			prefecture_id: 14,
			name: "藤沢市",
		},
		{
			prefecture_id: 14,
			name: "小田原市",
		},
		{
			prefecture_id: 14,
			name: "茅ヶ崎市",
		},
		{
			prefecture_id: 14,
			name: "逗子市",
		},
		{
			prefecture_id: 14,
			name: "三浦市",
		},
		{
			prefecture_id: 14,
			name: "秦野市",
		},
		{
			prefecture_id: 14,
			name: "厚木市",
		},
		{
			prefecture_id: 14,
			name: "大和市",
		},
		{
			prefecture_id: 14,
			name: "伊勢原市",
		},
		{
			prefecture_id: 14,
			name: "海老名市",
		},
		{
			prefecture_id: 14,
			name: "座間市",
		},
		{
			prefecture_id: 14,
			name: "南足柄市",
		},
		{
			prefecture_id: 14,
			name: "綾瀬市",
		},
		{
			prefecture_id: 14,
			name: "葉山町",
		},
		{
			prefecture_id: 14,
			name: "寒川町",
		},
		{
			prefecture_id: 14,
			name: "大磯町",
		},
		{
			prefecture_id: 14,
			name: "二宮町",
		},
		{
			prefecture_id: 14,
			name: "中井町",
		},
		{
			prefecture_id: 14,
			name: "大井町",
		},
		{
			prefecture_id: 14,
			name: "松田町",
		},
		{
			prefecture_id: 14,
			name: "山北町",
		},
		{
			prefecture_id: 14,
			name: "開成町",
		},
		{
			prefecture_id: 14,
			name: "箱根町",
		},
		{
			prefecture_id: 14,
			name: "真鶴町",
		},
		{
			prefecture_id: 14,
			name: "湯河原町",
		},
		{
			prefecture_id: 14,
			name: "愛川町",
		},
		{
			prefecture_id: 14,
			name: "清川村",
		},
		{
			prefecture_id: 15,
			name: "新潟市",
		},
		{
			prefecture_id: 15,
			name: "新潟市北区",
		},
		{
			prefecture_id: 15,
			name: "新潟市東区",
		},
		{
			prefecture_id: 15,
			name: "新潟市中央区",
		},
		{
			prefecture_id: 15,
			name: "新潟市江南区",
		},
		{
			prefecture_id: 15,
			name: "新潟市秋葉区",
		},
		{
			prefecture_id: 15,
			name: "新潟市南区",
		},
		{
			prefecture_id: 15,
			name: "新潟市西区",
		},
		{
			prefecture_id: 15,
			name: "新潟市西蒲区",
		},
		{
			prefecture_id: 15,
			name: "長岡市",
		},
		{
			prefecture_id: 15,
			name: "三条市",
		},
		{
			prefecture_id: 15,
			name: "柏崎市",
		},
		{
			prefecture_id: 15,
			name: "新発田市",
		},
		{
			prefecture_id: 15,
			name: "小千谷市",
		},
		{
			prefecture_id: 15,
			name: "加茂市",
		},
		{
			prefecture_id: 15,
			name: "十日町市",
		},
		{
			prefecture_id: 15,
			name: "見附市",
		},
		{
			prefecture_id: 15,
			name: "村上市",
		},
		{
			prefecture_id: 15,
			name: "燕市",
		},
		{
			prefecture_id: 15,
			name: "糸魚川市",
		},
		{
			prefecture_id: 15,
			name: "妙高市",
		},
		{
			prefecture_id: 15,
			name: "五泉市",
		},
		{
			prefecture_id: 15,
			name: "上越市",
		},
		{
			prefecture_id: 15,
			name: "阿賀野市",
		},
		{
			prefecture_id: 15,
			name: "佐渡市",
		},
		{
			prefecture_id: 15,
			name: "魚沼市",
		},
		{
			prefecture_id: 15,
			name: "南魚沼市",
		},
		{
			prefecture_id: 15,
			name: "胎内市",
		},
		{
			prefecture_id: 15,
			name: "聖籠町",
		},
		{
			prefecture_id: 15,
			name: "弥彦村",
		},
		{
			prefecture_id: 15,
			name: "田上町",
		},
		{
			prefecture_id: 15,
			name: "阿賀町",
		},
		{
			prefecture_id: 15,
			name: "出雲崎町",
		},
		{
			prefecture_id: 15,
			name: "湯沢町",
		},
		{
			prefecture_id: 15,
			name: "津南町",
		},
		{
			prefecture_id: 15,
			name: "刈羽村",
		},
		{
			prefecture_id: 15,
			name: "関川村",
		},
		{
			prefecture_id: 15,
			name: "粟島浦村",
		},
		{
			prefecture_id: 16,
			name: "富山市",
		},
		{
			prefecture_id: 16,
			name: "高岡市",
		},
		{
			prefecture_id: 16,
			name: "魚津市",
		},
		{
			prefecture_id: 16,
			name: "氷見市",
		},
		{
			prefecture_id: 16,
			name: "滑川市",
		},
		{
			prefecture_id: 16,
			name: "黒部市",
		},
		{
			prefecture_id: 16,
			name: "砺波市",
		},
		{
			prefecture_id: 16,
			name: "小矢部市",
		},
		{
			prefecture_id: 16,
			name: "南砺市",
		},
		{
			prefecture_id: 16,
			name: "射水市",
		},
		{
			prefecture_id: 16,
			name: "舟橋村",
		},
		{
			prefecture_id: 16,
			name: "上市町",
		},
		{
			prefecture_id: 16,
			name: "立山町",
		},
		{
			prefecture_id: 16,
			name: "入善町",
		},
		{
			prefecture_id: 16,
			name: "朝日町",
		},
		{
			prefecture_id: 17,
			name: "金沢市",
		},
		{
			prefecture_id: 17,
			name: "七尾市",
		},
		{
			prefecture_id: 17,
			name: "小松市",
		},
		{
			prefecture_id: 17,
			name: "輪島市",
		},
		{
			prefecture_id: 17,
			name: "珠洲市",
		},
		{
			prefecture_id: 17,
			name: "加賀市",
		},
		{
			prefecture_id: 17,
			name: "羽咋市",
		},
		{
			prefecture_id: 17,
			name: "かほく市",
		},
		{
			prefecture_id: 17,
			name: "白山市",
		},
		{
			prefecture_id: 17,
			name: "能美市",
		},
		{
			prefecture_id: 17,
			name: "野々市市",
		},
		{
			prefecture_id: 17,
			name: "川北町",
		},
		{
			prefecture_id: 17,
			name: "津幡町",
		},
		{
			prefecture_id: 17,
			name: "内灘町",
		},
		{
			prefecture_id: 17,
			name: "志賀町",
		},
		{
			prefecture_id: 17,
			name: "宝達志水町",
		},
		{
			prefecture_id: 17,
			name: "中能登町",
		},
		{
			prefecture_id: 17,
			name: "穴水町",
		},
		{
			prefecture_id: 17,
			name: "能登町",
		},
		{
			prefecture_id: 18,
			name: "福井市",
		},
		{
			prefecture_id: 18,
			name: "敦賀市",
		},
		{
			prefecture_id: 18,
			name: "小浜市",
		},
		{
			prefecture_id: 18,
			name: "大野市",
		},
		{
			prefecture_id: 18,
			name: "勝山市",
		},
		{
			prefecture_id: 18,
			name: "鯖江市",
		},
		{
			prefecture_id: 18,
			name: "あわら市",
		},
		{
			prefecture_id: 18,
			name: "越前市",
		},
		{
			prefecture_id: 18,
			name: "坂井市",
		},
		{
			prefecture_id: 18,
			name: "永平寺町",
		},
		{
			prefecture_id: 18,
			name: "池田町",
		},
		{
			prefecture_id: 18,
			name: "南越前町",
		},
		{
			prefecture_id: 18,
			name: "越前町",
		},
		{
			prefecture_id: 18,
			name: "美浜町",
		},
		{
			prefecture_id: 18,
			name: "高浜町",
		},
		{
			prefecture_id: 18,
			name: "おおい町",
		},
		{
			prefecture_id: 18,
			name: "若狭町",
		},
		{
			prefecture_id: 19,
			name: "甲府市",
		},
		{
			prefecture_id: 19,
			name: "富士吉田市",
		},
		{
			prefecture_id: 19,
			name: "都留市",
		},
		{
			prefecture_id: 19,
			name: "山梨市",
		},
		{
			prefecture_id: 19,
			name: "大月市",
		},
		{
			prefecture_id: 19,
			name: "韮崎市",
		},
		{
			prefecture_id: 19,
			name: "南アルプス市",
		},
		{
			prefecture_id: 19,
			name: "北杜市",
		},
		{
			prefecture_id: 19,
			name: "甲斐市",
		},
		{
			prefecture_id: 19,
			name: "笛吹市",
		},
		{
			prefecture_id: 19,
			name: "上野原市",
		},
		{
			prefecture_id: 19,
			name: "甲州市",
		},
		{
			prefecture_id: 19,
			name: "中央市",
		},
		{
			prefecture_id: 19,
			name: "市川三郷町",
		},
		{
			prefecture_id: 19,
			name: "早川町",
		},
		{
			prefecture_id: 19,
			name: "身延町",
		},
		{
			prefecture_id: 19,
			name: "南部町",
		},
		{
			prefecture_id: 19,
			name: "富士川町",
		},
		{
			prefecture_id: 19,
			name: "昭和町",
		},
		{
			prefecture_id: 19,
			name: "道志村",
		},
		{
			prefecture_id: 19,
			name: "西桂町",
		},
		{
			prefecture_id: 19,
			name: "忍野村",
		},
		{
			prefecture_id: 19,
			name: "山中湖村",
		},
		{
			prefecture_id: 19,
			name: "鳴沢村",
		},
		{
			prefecture_id: 19,
			name: "富士河口湖町",
		},
		{
			prefecture_id: 19,
			name: "小菅村",
		},
		{
			prefecture_id: 19,
			name: "丹波山村",
		},
		{
			prefecture_id: 20,
			name: "長野市",
		},
		{
			prefecture_id: 20,
			name: "松本市",
		},
		{
			prefecture_id: 20,
			name: "上田市",
		},
		{
			prefecture_id: 20,
			name: "岡谷市",
		},
		{
			prefecture_id: 20,
			name: "飯田市",
		},
		{
			prefecture_id: 20,
			name: "諏訪市",
		},
		{
			prefecture_id: 20,
			name: "須坂市",
		},
		{
			prefecture_id: 20,
			name: "小諸市",
		},
		{
			prefecture_id: 20,
			name: "伊那市",
		},
		{
			prefecture_id: 20,
			name: "駒ヶ根市",
		},
		{
			prefecture_id: 20,
			name: "中野市",
		},
		{
			prefecture_id: 20,
			name: "大町市",
		},
		{
			prefecture_id: 20,
			name: "飯山市",
		},
		{
			prefecture_id: 20,
			name: "茅野市",
		},
		{
			prefecture_id: 20,
			name: "塩尻市",
		},
		{
			prefecture_id: 20,
			name: "佐久市",
		},
		{
			prefecture_id: 20,
			name: "千曲市",
		},
		{
			prefecture_id: 20,
			name: "東御市",
		},
		{
			prefecture_id: 20,
			name: "安曇野市",
		},
		{
			prefecture_id: 20,
			name: "小海町",
		},
		{
			prefecture_id: 20,
			name: "川上村",
		},
		{
			prefecture_id: 20,
			name: "南牧村",
		},
		{
			prefecture_id: 20,
			name: "南相木村",
		},
		{
			prefecture_id: 20,
			name: "北相木村",
		},
		{
			prefecture_id: 20,
			name: "佐久穂町",
		},
		{
			prefecture_id: 20,
			name: "軽井沢町",
		},
		{
			prefecture_id: 20,
			name: "御代田町",
		},
		{
			prefecture_id: 20,
			name: "立科町",
		},
		{
			prefecture_id: 20,
			name: "青木村",
		},
		{
			prefecture_id: 20,
			name: "長和町",
		},
		{
			prefecture_id: 20,
			name: "下諏訪町",
		},
		{
			prefecture_id: 20,
			name: "富士見町",
		},
		{
			prefecture_id: 20,
			name: "原村",
		},
		{
			prefecture_id: 20,
			name: "辰野町",
		},
		{
			prefecture_id: 20,
			name: "箕輪町",
		},
		{
			prefecture_id: 20,
			name: "飯島町",
		},
		{
			prefecture_id: 20,
			name: "南箕輪村",
		},
		{
			prefecture_id: 20,
			name: "中川村",
		},
		{
			prefecture_id: 20,
			name: "宮田村",
		},
		{
			prefecture_id: 20,
			name: "松川町",
		},
		{
			prefecture_id: 20,
			name: "高森町",
		},
		{
			prefecture_id: 20,
			name: "阿南町",
		},
		{
			prefecture_id: 20,
			name: "阿智村",
		},
		{
			prefecture_id: 20,
			name: "平谷村",
		},
		{
			prefecture_id: 20,
			name: "根羽村",
		},
		{
			prefecture_id: 20,
			name: "下條村",
		},
		{
			prefecture_id: 20,
			name: "売木村",
		},
		{
			prefecture_id: 20,
			name: "天龍村",
		},
		{
			prefecture_id: 20,
			name: "泰阜村",
		},
		{
			prefecture_id: 20,
			name: "喬木村",
		},
		{
			prefecture_id: 20,
			name: "豊丘村",
		},
		{
			prefecture_id: 20,
			name: "大鹿村",
		},
		{
			prefecture_id: 20,
			name: "上松町",
		},
		{
			prefecture_id: 20,
			name: "南木曽町",
		},
		{
			prefecture_id: 20,
			name: "木祖村",
		},
		{
			prefecture_id: 20,
			name: "王滝村",
		},
		{
			prefecture_id: 20,
			name: "大桑村",
		},
		{
			prefecture_id: 20,
			name: "木曽町",
		},
		{
			prefecture_id: 20,
			name: "麻績村",
		},
		{
			prefecture_id: 20,
			name: "生坂村",
		},
		{
			prefecture_id: 20,
			name: "山形村",
		},
		{
			prefecture_id: 20,
			name: "朝日村",
		},
		{
			prefecture_id: 20,
			name: "筑北村",
		},
		{
			prefecture_id: 20,
			name: "池田町",
		},
		{
			prefecture_id: 20,
			name: "松川村",
		},
		{
			prefecture_id: 20,
			name: "白馬村",
		},
		{
			prefecture_id: 20,
			name: "小谷村",
		},
		{
			prefecture_id: 20,
			name: "坂城町",
		},
		{
			prefecture_id: 20,
			name: "小布施町",
		},
		{
			prefecture_id: 20,
			name: "高山村",
		},
		{
			prefecture_id: 20,
			name: "山ノ内町",
		},
		{
			prefecture_id: 20,
			name: "木島平村",
		},
		{
			prefecture_id: 20,
			name: "野沢温泉村",
		},
		{
			prefecture_id: 20,
			name: "信濃町",
		},
		{
			prefecture_id: 20,
			name: "小川村",
		},
		{
			prefecture_id: 20,
			name: "飯綱町",
		},
		{
			prefecture_id: 20,
			name: "栄村",
		},
		{
			prefecture_id: 21,
			name: "岐阜市",
		},
		{
			prefecture_id: 21,
			name: "大垣市",
		},
		{
			prefecture_id: 21,
			name: "高山市",
		},
		{
			prefecture_id: 21,
			name: "多治見市",
		},
		{
			prefecture_id: 21,
			name: "関市",
		},
		{
			prefecture_id: 21,
			name: "中津川市",
		},
		{
			prefecture_id: 21,
			name: "美濃市",
		},
		{
			prefecture_id: 21,
			name: "瑞浪市",
		},
		{
			prefecture_id: 21,
			name: "羽島市",
		},
		{
			prefecture_id: 21,
			name: "恵那市",
		},
		{
			prefecture_id: 21,
			name: "美濃加茂市",
		},
		{
			prefecture_id: 21,
			name: "土岐市",
		},
		{
			prefecture_id: 21,
			name: "各務原市",
		},
		{
			prefecture_id: 21,
			name: "可児市",
		},
		{
			prefecture_id: 21,
			name: "山県市",
		},
		{
			prefecture_id: 21,
			name: "瑞穂市",
		},
		{
			prefecture_id: 21,
			name: "飛騨市",
		},
		{
			prefecture_id: 21,
			name: "本巣市",
		},
		{
			prefecture_id: 21,
			name: "郡上市",
		},
		{
			prefecture_id: 21,
			name: "下呂市",
		},
		{
			prefecture_id: 21,
			name: "海津市",
		},
		{
			prefecture_id: 21,
			name: "岐南町",
		},
		{
			prefecture_id: 21,
			name: "笠松町",
		},
		{
			prefecture_id: 21,
			name: "養老町",
		},
		{
			prefecture_id: 21,
			name: "垂井町",
		},
		{
			prefecture_id: 21,
			name: "関ケ原町",
		},
		{
			prefecture_id: 21,
			name: "神戸町",
		},
		{
			prefecture_id: 21,
			name: "輪之内町",
		},
		{
			prefecture_id: 21,
			name: "安八町",
		},
		{
			prefecture_id: 21,
			name: "揖斐川町",
		},
		{
			prefecture_id: 21,
			name: "大野町",
		},
		{
			prefecture_id: 21,
			name: "池田町",
		},
		{
			prefecture_id: 21,
			name: "北方町",
		},
		{
			prefecture_id: 21,
			name: "坂祝町",
		},
		{
			prefecture_id: 21,
			name: "富加町",
		},
		{
			prefecture_id: 21,
			name: "川辺町",
		},
		{
			prefecture_id: 21,
			name: "七宗町",
		},
		{
			prefecture_id: 21,
			name: "八百津町",
		},
		{
			prefecture_id: 21,
			name: "白川町",
		},
		{
			prefecture_id: 21,
			name: "東白川村",
		},
		{
			prefecture_id: 21,
			name: "御嵩町",
		},
		{
			prefecture_id: 21,
			name: "白川村",
		},
		{
			prefecture_id: 22,
			name: "静岡市",
		},
		{
			prefecture_id: 22,
			name: "静岡市葵区",
		},
		{
			prefecture_id: 22,
			name: "静岡市駿河区",
		},
		{
			prefecture_id: 22,
			name: "静岡市清水区",
		},
		{
			prefecture_id: 22,
			name: "浜松市",
		},
		{
			prefecture_id: 22,
			name: "浜松市中区",
		},
		{
			prefecture_id: 22,
			name: "浜松市東区",
		},
		{
			prefecture_id: 22,
			name: "浜松市西区",
		},
		{
			prefecture_id: 22,
			name: "浜松市南区",
		},
		{
			prefecture_id: 22,
			name: "浜松市北区",
		},
		{
			prefecture_id: 22,
			name: "浜松市浜北区",
		},
		{
			prefecture_id: 22,
			name: "浜松市天竜区",
		},
		{
			prefecture_id: 22,
			name: "沼津市",
		},
		{
			prefecture_id: 22,
			name: "熱海市",
		},
		{
			prefecture_id: 22,
			name: "三島市",
		},
		{
			prefecture_id: 22,
			name: "富士宮市",
		},
		{
			prefecture_id: 22,
			name: "伊東市",
		},
		{
			prefecture_id: 22,
			name: "島田市",
		},
		{
			prefecture_id: 22,
			name: "富士市",
		},
		{
			prefecture_id: 22,
			name: "磐田市",
		},
		{
			prefecture_id: 22,
			name: "焼津市",
		},
		{
			prefecture_id: 22,
			name: "掛川市",
		},
		{
			prefecture_id: 22,
			name: "藤枝市",
		},
		{
			prefecture_id: 22,
			name: "御殿場市",
		},
		{
			prefecture_id: 22,
			name: "袋井市",
		},
		{
			prefecture_id: 22,
			name: "下田市",
		},
		{
			prefecture_id: 22,
			name: "裾野市",
		},
		{
			prefecture_id: 22,
			name: "湖西市",
		},
		{
			prefecture_id: 22,
			name: "伊豆市",
		},
		{
			prefecture_id: 22,
			name: "御前崎市",
		},
		{
			prefecture_id: 22,
			name: "菊川市",
		},
		{
			prefecture_id: 22,
			name: "伊豆の国市",
		},
		{
			prefecture_id: 22,
			name: "牧之原市",
		},
		{
			prefecture_id: 22,
			name: "東伊豆町",
		},
		{
			prefecture_id: 22,
			name: "河津町",
		},
		{
			prefecture_id: 22,
			name: "南伊豆町",
		},
		{
			prefecture_id: 22,
			name: "松崎町",
		},
		{
			prefecture_id: 22,
			name: "西伊豆町",
		},
		{
			prefecture_id: 22,
			name: "函南町",
		},
		{
			prefecture_id: 22,
			name: "清水町",
		},
		{
			prefecture_id: 22,
			name: "長泉町",
		},
		{
			prefecture_id: 22,
			name: "小山町",
		},
		{
			prefecture_id: 22,
			name: "吉田町",
		},
		{
			prefecture_id: 22,
			name: "川根本町",
		},
		{
			prefecture_id: 22,
			name: "森町",
		},
		{
			prefecture_id: 23,
			name: "名古屋市",
		},
		{
			prefecture_id: 23,
			name: "名古屋市千種区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市東区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市北区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市西区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市中村区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市中区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市昭和区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市瑞穂区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市熱田区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市中川区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市港区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市南区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市守山区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市緑区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市名東区",
		},
		{
			prefecture_id: 23,
			name: "名古屋市天白区",
		},
		{
			prefecture_id: 23,
			name: "豊橋市",
		},
		{
			prefecture_id: 23,
			name: "岡崎市",
		},
		{
			prefecture_id: 23,
			name: "一宮市",
		},
		{
			prefecture_id: 23,
			name: "瀬戸市",
		},
		{
			prefecture_id: 23,
			name: "半田市",
		},
		{
			prefecture_id: 23,
			name: "春日井市",
		},
		{
			prefecture_id: 23,
			name: "豊川市",
		},
		{
			prefecture_id: 23,
			name: "津島市",
		},
		{
			prefecture_id: 23,
			name: "碧南市",
		},
		{
			prefecture_id: 23,
			name: "刈谷市",
		},
		{
			prefecture_id: 23,
			name: "豊田市",
		},
		{
			prefecture_id: 23,
			name: "安城市",
		},
		{
			prefecture_id: 23,
			name: "西尾市",
		},
		{
			prefecture_id: 23,
			name: "蒲郡市",
		},
		{
			prefecture_id: 23,
			name: "犬山市",
		},
		{
			prefecture_id: 23,
			name: "常滑市",
		},
		{
			prefecture_id: 23,
			name: "江南市",
		},
		{
			prefecture_id: 23,
			name: "小牧市",
		},
		{
			prefecture_id: 23,
			name: "稲沢市",
		},
		{
			prefecture_id: 23,
			name: "新城市",
		},
		{
			prefecture_id: 23,
			name: "東海市",
		},
		{
			prefecture_id: 23,
			name: "大府市",
		},
		{
			prefecture_id: 23,
			name: "知多市",
		},
		{
			prefecture_id: 23,
			name: "知立市",
		},
		{
			prefecture_id: 23,
			name: "尾張旭市",
		},
		{
			prefecture_id: 23,
			name: "高浜市",
		},
		{
			prefecture_id: 23,
			name: "岩倉市",
		},
		{
			prefecture_id: 23,
			name: "豊明市",
		},
		{
			prefecture_id: 23,
			name: "日進市",
		},
		{
			prefecture_id: 23,
			name: "田原市",
		},
		{
			prefecture_id: 23,
			name: "愛西市",
		},
		{
			prefecture_id: 23,
			name: "清須市",
		},
		{
			prefecture_id: 23,
			name: "北名古屋市",
		},
		{
			prefecture_id: 23,
			name: "弥富市",
		},
		{
			prefecture_id: 23,
			name: "みよし市",
		},
		{
			prefecture_id: 23,
			name: "あま市",
		},
		{
			prefecture_id: 23,
			name: "長久手市",
		},
		{
			prefecture_id: 23,
			name: "東郷町",
		},
		{
			prefecture_id: 23,
			name: "豊山町",
		},
		{
			prefecture_id: 23,
			name: "大口町",
		},
		{
			prefecture_id: 23,
			name: "扶桑町",
		},
		{
			prefecture_id: 23,
			name: "大治町",
		},
		{
			prefecture_id: 23,
			name: "蟹江町",
		},
		{
			prefecture_id: 23,
			name: "飛島村",
		},
		{
			prefecture_id: 23,
			name: "阿久比町",
		},
		{
			prefecture_id: 23,
			name: "東浦町",
		},
		{
			prefecture_id: 23,
			name: "南知多町",
		},
		{
			prefecture_id: 23,
			name: "美浜町",
		},
		{
			prefecture_id: 23,
			name: "武豊町",
		},
		{
			prefecture_id: 23,
			name: "幸田町",
		},
		{
			prefecture_id: 23,
			name: "設楽町",
		},
		{
			prefecture_id: 23,
			name: "東栄町",
		},
		{
			prefecture_id: 23,
			name: "豊根村",
		},
		{
			prefecture_id: 24,
			name: "津市",
		},
		{
			prefecture_id: 24,
			name: "四日市市",
		},
		{
			prefecture_id: 24,
			name: "伊勢市",
		},
		{
			prefecture_id: 24,
			name: "松阪市",
		},
		{
			prefecture_id: 24,
			name: "桑名市",
		},
		{
			prefecture_id: 24,
			name: "鈴鹿市",
		},
		{
			prefecture_id: 24,
			name: "名張市",
		},
		{
			prefecture_id: 24,
			name: "尾鷲市",
		},
		{
			prefecture_id: 24,
			name: "亀山市",
		},
		{
			prefecture_id: 24,
			name: "鳥羽市",
		},
		{
			prefecture_id: 24,
			name: "熊野市",
		},
		{
			prefecture_id: 24,
			name: "いなべ市",
		},
		{
			prefecture_id: 24,
			name: "志摩市",
		},
		{
			prefecture_id: 24,
			name: "伊賀市",
		},
		{
			prefecture_id: 24,
			name: "木曽岬町",
		},
		{
			prefecture_id: 24,
			name: "東員町",
		},
		{
			prefecture_id: 24,
			name: "菰野町",
		},
		{
			prefecture_id: 24,
			name: "朝日町",
		},
		{
			prefecture_id: 24,
			name: "川越町",
		},
		{
			prefecture_id: 24,
			name: "多気町",
		},
		{
			prefecture_id: 24,
			name: "明和町",
		},
		{
			prefecture_id: 24,
			name: "大台町",
		},
		{
			prefecture_id: 24,
			name: "玉城町",
		},
		{
			prefecture_id: 24,
			name: "度会町",
		},
		{
			prefecture_id: 24,
			name: "大紀町",
		},
		{
			prefecture_id: 24,
			name: "南伊勢町",
		},
		{
			prefecture_id: 24,
			name: "紀北町",
		},
		{
			prefecture_id: 24,
			name: "御浜町",
		},
		{
			prefecture_id: 24,
			name: "紀宝町",
		},
		{
			prefecture_id: 25,
			name: "大津市",
		},
		{
			prefecture_id: 25,
			name: "彦根市",
		},
		{
			prefecture_id: 25,
			name: "長浜市",
		},
		{
			prefecture_id: 25,
			name: "近江八幡市",
		},
		{
			prefecture_id: 25,
			name: "草津市",
		},
		{
			prefecture_id: 25,
			name: "守山市",
		},
		{
			prefecture_id: 25,
			name: "栗東市",
		},
		{
			prefecture_id: 25,
			name: "甲賀市",
		},
		{
			prefecture_id: 25,
			name: "野洲市",
		},
		{
			prefecture_id: 25,
			name: "湖南市",
		},
		{
			prefecture_id: 25,
			name: "高島市",
		},
		{
			prefecture_id: 25,
			name: "東近江市",
		},
		{
			prefecture_id: 25,
			name: "米原市",
		},
		{
			prefecture_id: 25,
			name: "日野町",
		},
		{
			prefecture_id: 25,
			name: "竜王町",
		},
		{
			prefecture_id: 25,
			name: "愛荘町",
		},
		{
			prefecture_id: 25,
			name: "豊郷町",
		},
		{
			prefecture_id: 25,
			name: "甲良町",
		},
		{
			prefecture_id: 25,
			name: "多賀町",
		},
		{
			prefecture_id: 26,
			name: "京都市",
		},
		{
			prefecture_id: 26,
			name: "京都市北区",
		},
		{
			prefecture_id: 26,
			name: "京都市上京区",
		},
		{
			prefecture_id: 26,
			name: "京都市左京区",
		},
		{
			prefecture_id: 26,
			name: "京都市中京区",
		},
		{
			prefecture_id: 26,
			name: "京都市東山区",
		},
		{
			prefecture_id: 26,
			name: "京都市下京区",
		},
		{
			prefecture_id: 26,
			name: "京都市南区",
		},
		{
			prefecture_id: 26,
			name: "京都市右京区",
		},
		{
			prefecture_id: 26,
			name: "京都市伏見区",
		},
		{
			prefecture_id: 26,
			name: "京都市山科区",
		},
		{
			prefecture_id: 26,
			name: "京都市西京区",
		},
		{
			prefecture_id: 26,
			name: "福知山市",
		},
		{
			prefecture_id: 26,
			name: "舞鶴市",
		},
		{
			prefecture_id: 26,
			name: "綾部市",
		},
		{
			prefecture_id: 26,
			name: "宇治市",
		},
		{
			prefecture_id: 26,
			name: "宮津市",
		},
		{
			prefecture_id: 26,
			name: "亀岡市",
		},
		{
			prefecture_id: 26,
			name: "城陽市",
		},
		{
			prefecture_id: 26,
			name: "向日市",
		},
		{
			prefecture_id: 26,
			name: "長岡京市",
		},
		{
			prefecture_id: 26,
			name: "八幡市",
		},
		{
			prefecture_id: 26,
			name: "京田辺市",
		},
		{
			prefecture_id: 26,
			name: "京丹後市",
		},
		{
			prefecture_id: 26,
			name: "南丹市",
		},
		{
			prefecture_id: 26,
			name: "木津川市",
		},
		{
			prefecture_id: 26,
			name: "大山崎町",
		},
		{
			prefecture_id: 26,
			name: "久御山町",
		},
		{
			prefecture_id: 26,
			name: "井手町",
		},
		{
			prefecture_id: 26,
			name: "宇治田原町",
		},
		{
			prefecture_id: 26,
			name: "笠置町",
		},
		{
			prefecture_id: 26,
			name: "和束町",
		},
		{
			prefecture_id: 26,
			name: "精華町",
		},
		{
			prefecture_id: 26,
			name: "南山城村",
		},
		{
			prefecture_id: 26,
			name: "京丹波町",
		},
		{
			prefecture_id: 26,
			name: "伊根町",
		},
		{
			prefecture_id: 26,
			name: "与謝野町",
		},
		{
			prefecture_id: 27,
			name: "大阪市",
		},
		{
			prefecture_id: 27,
			name: "大阪市都島区",
		},
		{
			prefecture_id: 27,
			name: "大阪市福島区",
		},
		{
			prefecture_id: 27,
			name: "大阪市此花区",
		},
		{
			prefecture_id: 27,
			name: "大阪市西区",
		},
		{
			prefecture_id: 27,
			name: "大阪市港区",
		},
		{
			prefecture_id: 27,
			name: "大阪市大正区",
		},
		{
			prefecture_id: 27,
			name: "大阪市天王寺区",
		},
		{
			prefecture_id: 27,
			name: "大阪市浪速区",
		},
		{
			prefecture_id: 27,
			name: "大阪市西淀川区",
		},
		{
			prefecture_id: 27,
			name: "大阪市東淀川区",
		},
		{
			prefecture_id: 27,
			name: "大阪市東成区",
		},
		{
			prefecture_id: 27,
			name: "大阪市生野区",
		},
		{
			prefecture_id: 27,
			name: "大阪市旭区",
		},
		{
			prefecture_id: 27,
			name: "大阪市城東区",
		},
		{
			prefecture_id: 27,
			name: "大阪市阿倍野区",
		},
		{
			prefecture_id: 27,
			name: "大阪市住吉区",
		},
		{
			prefecture_id: 27,
			name: "大阪市東住吉区",
		},
		{
			prefecture_id: 27,
			name: "大阪市西成区",
		},
		{
			prefecture_id: 27,
			name: "大阪市淀川区",
		},
		{
			prefecture_id: 27,
			name: "大阪市鶴見区",
		},
		{
			prefecture_id: 27,
			name: "大阪市住之江区",
		},
		{
			prefecture_id: 27,
			name: "大阪市平野区",
		},
		{
			prefecture_id: 27,
			name: "大阪市北区",
		},
		{
			prefecture_id: 27,
			name: "大阪市中央区",
		},
		{
			prefecture_id: 27,
			name: "堺市",
		},
		{
			prefecture_id: 27,
			name: "堺市堺区",
		},
		{
			prefecture_id: 27,
			name: "堺市中区",
		},
		{
			prefecture_id: 27,
			name: "堺市東区",
		},
		{
			prefecture_id: 27,
			name: "堺市西区",
		},
		{
			prefecture_id: 27,
			name: "堺市南区",
		},
		{
			prefecture_id: 27,
			name: "堺市北区",
		},
		{
			prefecture_id: 27,
			name: "堺市美原区",
		},
		{
			prefecture_id: 27,
			name: "岸和田市",
		},
		{
			prefecture_id: 27,
			name: "豊中市",
		},
		{
			prefecture_id: 27,
			name: "池田市",
		},
		{
			prefecture_id: 27,
			name: "吹田市",
		},
		{
			prefecture_id: 27,
			name: "泉大津市",
		},
		{
			prefecture_id: 27,
			name: "高槻市",
		},
		{
			prefecture_id: 27,
			name: "貝塚市",
		},
		{
			prefecture_id: 27,
			name: "守口市",
		},
		{
			prefecture_id: 27,
			name: "枚方市",
		},
		{
			prefecture_id: 27,
			name: "茨木市",
		},
		{
			prefecture_id: 27,
			name: "八尾市",
		},
		{
			prefecture_id: 27,
			name: "泉佐野市",
		},
		{
			prefecture_id: 27,
			name: "富田林市",
		},
		{
			prefecture_id: 27,
			name: "寝屋川市",
		},
		{
			prefecture_id: 27,
			name: "河内長野市",
		},
		{
			prefecture_id: 27,
			name: "松原市",
		},
		{
			prefecture_id: 27,
			name: "大東市",
		},
		{
			prefecture_id: 27,
			name: "和泉市",
		},
		{
			prefecture_id: 27,
			name: "箕面市",
		},
		{
			prefecture_id: 27,
			name: "柏原市",
		},
		{
			prefecture_id: 27,
			name: "羽曳野市",
		},
		{
			prefecture_id: 27,
			name: "門真市",
		},
		{
			prefecture_id: 27,
			name: "摂津市",
		},
		{
			prefecture_id: 27,
			name: "高石市",
		},
		{
			prefecture_id: 27,
			name: "藤井寺市",
		},
		{
			prefecture_id: 27,
			name: "東大阪市",
		},
		{
			prefecture_id: 27,
			name: "泉南市",
		},
		{
			prefecture_id: 27,
			name: "四條畷市",
		},
		{
			prefecture_id: 27,
			name: "交野市",
		},
		{
			prefecture_id: 27,
			name: "大阪狭山市",
		},
		{
			prefecture_id: 27,
			name: "阪南市",
		},
		{
			prefecture_id: 27,
			name: "島本町",
		},
		{
			prefecture_id: 27,
			name: "豊能町",
		},
		{
			prefecture_id: 27,
			name: "能勢町",
		},
		{
			prefecture_id: 27,
			name: "忠岡町",
		},
		{
			prefecture_id: 27,
			name: "熊取町",
		},
		{
			prefecture_id: 27,
			name: "田尻町",
		},
		{
			prefecture_id: 27,
			name: "岬町",
		},
		{
			prefecture_id: 27,
			name: "太子町",
		},
		{
			prefecture_id: 27,
			name: "河南町",
		},
		{
			prefecture_id: 27,
			name: "千早赤阪村",
		},
		{
			prefecture_id: 28,
			name: "神戸市",
		},
		{
			prefecture_id: 28,
			name: "神戸市東灘区",
		},
		{
			prefecture_id: 28,
			name: "神戸市灘区",
		},
		{
			prefecture_id: 28,
			name: "神戸市兵庫区",
		},
		{
			prefecture_id: 28,
			name: "神戸市長田区",
		},
		{
			prefecture_id: 28,
			name: "神戸市須磨区",
		},
		{
			prefecture_id: 28,
			name: "神戸市垂水区",
		},
		{
			prefecture_id: 28,
			name: "神戸市北区",
		},
		{
			prefecture_id: 28,
			name: "神戸市中央区",
		},
		{
			prefecture_id: 28,
			name: "神戸市西区",
		},
		{
			prefecture_id: 28,
			name: "姫路市",
		},
		{
			prefecture_id: 28,
			name: "尼崎市",
		},
		{
			prefecture_id: 28,
			name: "明石市",
		},
		{
			prefecture_id: 28,
			name: "西宮市",
		},
		{
			prefecture_id: 28,
			name: "洲本市",
		},
		{
			prefecture_id: 28,
			name: "芦屋市",
		},
		{
			prefecture_id: 28,
			name: "伊丹市",
		},
		{
			prefecture_id: 28,
			name: "相生市",
		},
		{
			prefecture_id: 28,
			name: "豊岡市",
		},
		{
			prefecture_id: 28,
			name: "加古川市",
		},
		{
			prefecture_id: 28,
			name: "赤穂市",
		},
		{
			prefecture_id: 28,
			name: "西脇市",
		},
		{
			prefecture_id: 28,
			name: "宝塚市",
		},
		{
			prefecture_id: 28,
			name: "三木市",
		},
		{
			prefecture_id: 28,
			name: "高砂市",
		},
		{
			prefecture_id: 28,
			name: "川西市",
		},
		{
			prefecture_id: 28,
			name: "小野市",
		},
		{
			prefecture_id: 28,
			name: "三田市",
		},
		{
			prefecture_id: 28,
			name: "加西市",
		},
		{
			prefecture_id: 28,
			name: "丹波篠山市",
		},
		{
			prefecture_id: 28,
			name: "養父市",
		},
		{
			prefecture_id: 28,
			name: "丹波市",
		},
		{
			prefecture_id: 28,
			name: "南あわじ市",
		},
		{
			prefecture_id: 28,
			name: "朝来市",
		},
		{
			prefecture_id: 28,
			name: "淡路市",
		},
		{
			prefecture_id: 28,
			name: "宍粟市",
		},
		{
			prefecture_id: 28,
			name: "加東市",
		},
		{
			prefecture_id: 28,
			name: "たつの市",
		},
		{
			prefecture_id: 28,
			name: "猪名川町",
		},
		{
			prefecture_id: 28,
			name: "多可町",
		},
		{
			prefecture_id: 28,
			name: "稲美町",
		},
		{
			prefecture_id: 28,
			name: "播磨町",
		},
		{
			prefecture_id: 28,
			name: "市川町",
		},
		{
			prefecture_id: 28,
			name: "福崎町",
		},
		{
			prefecture_id: 28,
			name: "神河町",
		},
		{
			prefecture_id: 28,
			name: "太子町",
		},
		{
			prefecture_id: 28,
			name: "上郡町",
		},
		{
			prefecture_id: 28,
			name: "佐用町",
		},
		{
			prefecture_id: 28,
			name: "香美町",
		},
		{
			prefecture_id: 28,
			name: "新温泉町",
		},
		{
			prefecture_id: 29,
			name: "奈良市",
		},
		{
			prefecture_id: 29,
			name: "大和高田市",
		},
		{
			prefecture_id: 29,
			name: "大和郡山市",
		},
		{
			prefecture_id: 29,
			name: "天理市",
		},
		{
			prefecture_id: 29,
			name: "橿原市",
		},
		{
			prefecture_id: 29,
			name: "桜井市",
		},
		{
			prefecture_id: 29,
			name: "五條市",
		},
		{
			prefecture_id: 29,
			name: "御所市",
		},
		{
			prefecture_id: 29,
			name: "生駒市",
		},
		{
			prefecture_id: 29,
			name: "香芝市",
		},
		{
			prefecture_id: 29,
			name: "葛城市",
		},
		{
			prefecture_id: 29,
			name: "宇陀市",
		},
		{
			prefecture_id: 29,
			name: "山添村",
		},
		{
			prefecture_id: 29,
			name: "平群町",
		},
		{
			prefecture_id: 29,
			name: "三郷町",
		},
		{
			prefecture_id: 29,
			name: "斑鳩町",
		},
		{
			prefecture_id: 29,
			name: "安堵町",
		},
		{
			prefecture_id: 29,
			name: "川西町",
		},
		{
			prefecture_id: 29,
			name: "三宅町",
		},
		{
			prefecture_id: 29,
			name: "田原本町",
		},
		{
			prefecture_id: 29,
			name: "曽爾村",
		},
		{
			prefecture_id: 29,
			name: "御杖村",
		},
		{
			prefecture_id: 29,
			name: "高取町",
		},
		{
			prefecture_id: 29,
			name: "明日香村",
		},
		{
			prefecture_id: 29,
			name: "上牧町",
		},
		{
			prefecture_id: 29,
			name: "王寺町",
		},
		{
			prefecture_id: 29,
			name: "広陵町",
		},
		{
			prefecture_id: 29,
			name: "河合町",
		},
		{
			prefecture_id: 29,
			name: "吉野町",
		},
		{
			prefecture_id: 29,
			name: "大淀町",
		},
		{
			prefecture_id: 29,
			name: "下市町",
		},
		{
			prefecture_id: 29,
			name: "黒滝村",
		},
		{
			prefecture_id: 29,
			name: "天川村",
		},
		{
			prefecture_id: 29,
			name: "野迫川村",
		},
		{
			prefecture_id: 29,
			name: "十津川村",
		},
		{
			prefecture_id: 29,
			name: "下北山村",
		},
		{
			prefecture_id: 29,
			name: "上北山村",
		},
		{
			prefecture_id: 29,
			name: "川上村",
		},
		{
			prefecture_id: 29,
			name: "東吉野村",
		},
		{
			prefecture_id: 30,
			name: "和歌山市",
		},
		{
			prefecture_id: 30,
			name: "海南市",
		},
		{
			prefecture_id: 30,
			name: "橋本市",
		},
		{
			prefecture_id: 30,
			name: "有田市",
		},
		{
			prefecture_id: 30,
			name: "御坊市",
		},
		{
			prefecture_id: 30,
			name: "田辺市",
		},
		{
			prefecture_id: 30,
			name: "新宮市",
		},
		{
			prefecture_id: 30,
			name: "紀の川市",
		},
		{
			prefecture_id: 30,
			name: "岩出市",
		},
		{
			prefecture_id: 30,
			name: "紀美野町",
		},
		{
			prefecture_id: 30,
			name: "かつらぎ町",
		},
		{
			prefecture_id: 30,
			name: "九度山町",
		},
		{
			prefecture_id: 30,
			name: "高野町",
		},
		{
			prefecture_id: 30,
			name: "湯浅町",
		},
		{
			prefecture_id: 30,
			name: "広川町",
		},
		{
			prefecture_id: 30,
			name: "有田川町",
		},
		{
			prefecture_id: 30,
			name: "美浜町",
		},
		{
			prefecture_id: 30,
			name: "日高町",
		},
		{
			prefecture_id: 30,
			name: "由良町",
		},
		{
			prefecture_id: 30,
			name: "印南町",
		},
		{
			prefecture_id: 30,
			name: "みなべ町",
		},
		{
			prefecture_id: 30,
			name: "日高川町",
		},
		{
			prefecture_id: 30,
			name: "白浜町",
		},
		{
			prefecture_id: 30,
			name: "上富田町",
		},
		{
			prefecture_id: 30,
			name: "すさみ町",
		},
		{
			prefecture_id: 30,
			name: "那智勝浦町",
		},
		{
			prefecture_id: 30,
			name: "太地町",
		},
		{
			prefecture_id: 30,
			name: "古座川町",
		},
		{
			prefecture_id: 30,
			name: "北山村",
		},
		{
			prefecture_id: 30,
			name: "串本町",
		},
		{
			prefecture_id: 31,
			name: "鳥取市",
		},
		{
			prefecture_id: 31,
			name: "米子市",
		},
		{
			prefecture_id: 31,
			name: "倉吉市",
		},
		{
			prefecture_id: 31,
			name: "境港市",
		},
		{
			prefecture_id: 31,
			name: "岩美町",
		},
		{
			prefecture_id: 31,
			name: "若桜町",
		},
		{
			prefecture_id: 31,
			name: "智頭町",
		},
		{
			prefecture_id: 31,
			name: "八頭町",
		},
		{
			prefecture_id: 31,
			name: "三朝町",
		},
		{
			prefecture_id: 31,
			name: "湯梨浜町",
		},
		{
			prefecture_id: 31,
			name: "琴浦町",
		},
		{
			prefecture_id: 31,
			name: "北栄町",
		},
		{
			prefecture_id: 31,
			name: "日吉津村",
		},
		{
			prefecture_id: 31,
			name: "大山町",
		},
		{
			prefecture_id: 31,
			name: "南部町",
		},
		{
			prefecture_id: 31,
			name: "伯耆町",
		},
		{
			prefecture_id: 31,
			name: "日南町",
		},
		{
			prefecture_id: 31,
			name: "日野町",
		},
		{
			prefecture_id: 31,
			name: "江府町",
		},
		{
			prefecture_id: 32,
			name: "松江市",
		},
		{
			prefecture_id: 32,
			name: "浜田市",
		},
		{
			prefecture_id: 32,
			name: "出雲市",
		},
		{
			prefecture_id: 32,
			name: "益田市",
		},
		{
			prefecture_id: 32,
			name: "大田市",
		},
		{
			prefecture_id: 32,
			name: "安来市",
		},
		{
			prefecture_id: 32,
			name: "江津市",
		},
		{
			prefecture_id: 32,
			name: "雲南市",
		},
		{
			prefecture_id: 32,
			name: "奥出雲町",
		},
		{
			prefecture_id: 32,
			name: "飯南町",
		},
		{
			prefecture_id: 32,
			name: "川本町",
		},
		{
			prefecture_id: 32,
			name: "美郷町",
		},
		{
			prefecture_id: 32,
			name: "邑南町",
		},
		{
			prefecture_id: 32,
			name: "津和野町",
		},
		{
			prefecture_id: 32,
			name: "吉賀町",
		},
		{
			prefecture_id: 32,
			name: "海士町",
		},
		{
			prefecture_id: 32,
			name: "西ノ島町",
		},
		{
			prefecture_id: 32,
			name: "知夫村",
		},
		{
			prefecture_id: 32,
			name: "隠岐の島町",
		},
		{
			prefecture_id: 33,
			name: "岡山市",
		},
		{
			prefecture_id: 33,
			name: "岡山市北区",
		},
		{
			prefecture_id: 33,
			name: "岡山市中区",
		},
		{
			prefecture_id: 33,
			name: "岡山市東区",
		},
		{
			prefecture_id: 33,
			name: "岡山市南区",
		},
		{
			prefecture_id: 33,
			name: "倉敷市",
		},
		{
			prefecture_id: 33,
			name: "津山市",
		},
		{
			prefecture_id: 33,
			name: "玉野市",
		},
		{
			prefecture_id: 33,
			name: "笠岡市",
		},
		{
			prefecture_id: 33,
			name: "井原市",
		},
		{
			prefecture_id: 33,
			name: "総社市",
		},
		{
			prefecture_id: 33,
			name: "高梁市",
		},
		{
			prefecture_id: 33,
			name: "新見市",
		},
		{
			prefecture_id: 33,
			name: "備前市",
		},
		{
			prefecture_id: 33,
			name: "瀬戸内市",
		},
		{
			prefecture_id: 33,
			name: "赤磐市",
		},
		{
			prefecture_id: 33,
			name: "真庭市",
		},
		{
			prefecture_id: 33,
			name: "美作市",
		},
		{
			prefecture_id: 33,
			name: "浅口市",
		},
		{
			prefecture_id: 33,
			name: "和気町",
		},
		{
			prefecture_id: 33,
			name: "早島町",
		},
		{
			prefecture_id: 33,
			name: "里庄町",
		},
		{
			prefecture_id: 33,
			name: "矢掛町",
		},
		{
			prefecture_id: 33,
			name: "新庄村",
		},
		{
			prefecture_id: 33,
			name: "鏡野町",
		},
		{
			prefecture_id: 33,
			name: "勝央町",
		},
		{
			prefecture_id: 33,
			name: "奈義町",
		},
		{
			prefecture_id: 33,
			name: "西粟倉村",
		},
		{
			prefecture_id: 33,
			name: "久米南町",
		},
		{
			prefecture_id: 33,
			name: "美咲町",
		},
		{
			prefecture_id: 33,
			name: "吉備中央町",
		},
		{
			prefecture_id: 34,
			name: "広島市",
		},
		{
			prefecture_id: 34,
			name: "広島市中区",
		},
		{
			prefecture_id: 34,
			name: "広島市東区",
		},
		{
			prefecture_id: 34,
			name: "広島市南区",
		},
		{
			prefecture_id: 34,
			name: "広島市西区",
		},
		{
			prefecture_id: 34,
			name: "広島市安佐南区",
		},
		{
			prefecture_id: 34,
			name: "広島市安佐北区",
		},
		{
			prefecture_id: 34,
			name: "広島市安芸区",
		},
		{
			prefecture_id: 34,
			name: "広島市佐伯区",
		},
		{
			prefecture_id: 34,
			name: "呉市",
		},
		{
			prefecture_id: 34,
			name: "竹原市",
		},
		{
			prefecture_id: 34,
			name: "三原市",
		},
		{
			prefecture_id: 34,
			name: "尾道市",
		},
		{
			prefecture_id: 34,
			name: "福山市",
		},
		{
			prefecture_id: 34,
			name: "府中市",
		},
		{
			prefecture_id: 34,
			name: "三次市",
		},
		{
			prefecture_id: 34,
			name: "庄原市",
		},
		{
			prefecture_id: 34,
			name: "大竹市",
		},
		{
			prefecture_id: 34,
			name: "東広島市",
		},
		{
			prefecture_id: 34,
			name: "廿日市市",
		},
		{
			prefecture_id: 34,
			name: "安芸高田市",
		},
		{
			prefecture_id: 34,
			name: "江田島市",
		},
		{
			prefecture_id: 34,
			name: "府中町",
		},
		{
			prefecture_id: 34,
			name: "海田町",
		},
		{
			prefecture_id: 34,
			name: "熊野町",
		},
		{
			prefecture_id: 34,
			name: "坂町",
		},
		{
			prefecture_id: 34,
			name: "安芸太田町",
		},
		{
			prefecture_id: 34,
			name: "北広島町",
		},
		{
			prefecture_id: 34,
			name: "大崎上島町",
		},
		{
			prefecture_id: 34,
			name: "世羅町",
		},
		{
			prefecture_id: 34,
			name: "神石高原町",
		},
		{
			prefecture_id: 35,
			name: "下関市",
		},
		{
			prefecture_id: 35,
			name: "宇部市",
		},
		{
			prefecture_id: 35,
			name: "山口市",
		},
		{
			prefecture_id: 35,
			name: "萩市",
		},
		{
			prefecture_id: 35,
			name: "防府市",
		},
		{
			prefecture_id: 35,
			name: "下松市",
		},
		{
			prefecture_id: 35,
			name: "岩国市",
		},
		{
			prefecture_id: 35,
			name: "光市",
		},
		{
			prefecture_id: 35,
			name: "長門市",
		},
		{
			prefecture_id: 35,
			name: "柳井市",
		},
		{
			prefecture_id: 35,
			name: "美祢市",
		},
		{
			prefecture_id: 35,
			name: "周南市",
		},
		{
			prefecture_id: 35,
			name: "山陽小野田市",
		},
		{
			prefecture_id: 35,
			name: "周防大島町",
		},
		{
			prefecture_id: 35,
			name: "和木町",
		},
		{
			prefecture_id: 35,
			name: "上関町",
		},
		{
			prefecture_id: 35,
			name: "田布施町",
		},
		{
			prefecture_id: 35,
			name: "平生町",
		},
		{
			prefecture_id: 35,
			name: "阿武町",
		},
		{
			prefecture_id: 36,
			name: "徳島市",
		},
		{
			prefecture_id: 36,
			name: "鳴門市",
		},
		{
			prefecture_id: 36,
			name: "小松島市",
		},
		{
			prefecture_id: 36,
			name: "阿南市",
		},
		{
			prefecture_id: 36,
			name: "吉野川市",
		},
		{
			prefecture_id: 36,
			name: "阿波市",
		},
		{
			prefecture_id: 36,
			name: "美馬市",
		},
		{
			prefecture_id: 36,
			name: "三好市",
		},
		{
			prefecture_id: 36,
			name: "勝浦町",
		},
		{
			prefecture_id: 36,
			name: "上勝町",
		},
		{
			prefecture_id: 36,
			name: "佐那河内村",
		},
		{
			prefecture_id: 36,
			name: "石井町",
		},
		{
			prefecture_id: 36,
			name: "神山町",
		},
		{
			prefecture_id: 36,
			name: "那賀町",
		},
		{
			prefecture_id: 36,
			name: "牟岐町",
		},
		{
			prefecture_id: 36,
			name: "美波町",
		},
		{
			prefecture_id: 36,
			name: "海陽町",
		},
		{
			prefecture_id: 36,
			name: "松茂町",
		},
		{
			prefecture_id: 36,
			name: "北島町",
		},
		{
			prefecture_id: 36,
			name: "藍住町",
		},
		{
			prefecture_id: 36,
			name: "板野町",
		},
		{
			prefecture_id: 36,
			name: "上板町",
		},
		{
			prefecture_id: 36,
			name: "つるぎ町",
		},
		{
			prefecture_id: 36,
			name: "東みよし町",
		},
		{
			prefecture_id: 37,
			name: "高松市",
		},
		{
			prefecture_id: 37,
			name: "丸亀市",
		},
		{
			prefecture_id: 37,
			name: "坂出市",
		},
		{
			prefecture_id: 37,
			name: "善通寺市",
		},
		{
			prefecture_id: 37,
			name: "観音寺市",
		},
		{
			prefecture_id: 37,
			name: "さぬき市",
		},
		{
			prefecture_id: 37,
			name: "東かがわ市",
		},
		{
			prefecture_id: 37,
			name: "三豊市",
		},
		{
			prefecture_id: 37,
			name: "土庄町",
		},
		{
			prefecture_id: 37,
			name: "小豆島町",
		},
		{
			prefecture_id: 37,
			name: "三木町",
		},
		{
			prefecture_id: 37,
			name: "直島町",
		},
		{
			prefecture_id: 37,
			name: "宇多津町",
		},
		{
			prefecture_id: 37,
			name: "綾川町",
		},
		{
			prefecture_id: 37,
			name: "琴平町",
		},
		{
			prefecture_id: 37,
			name: "多度津町",
		},
		{
			prefecture_id: 37,
			name: "まんのう町",
		},
		{
			prefecture_id: 38,
			name: "松山市",
		},
		{
			prefecture_id: 38,
			name: "今治市",
		},
		{
			prefecture_id: 38,
			name: "宇和島市",
		},
		{
			prefecture_id: 38,
			name: "八幡浜市",
		},
		{
			prefecture_id: 38,
			name: "新居浜市",
		},
		{
			prefecture_id: 38,
			name: "西条市",
		},
		{
			prefecture_id: 38,
			name: "大洲市",
		},
		{
			prefecture_id: 38,
			name: "伊予市",
		},
		{
			prefecture_id: 38,
			name: "四国中央市",
		},
		{
			prefecture_id: 38,
			name: "西予市",
		},
		{
			prefecture_id: 38,
			name: "東温市",
		},
		{
			prefecture_id: 38,
			name: "上島町",
		},
		{
			prefecture_id: 38,
			name: "久万高原町",
		},
		{
			prefecture_id: 38,
			name: "松前町",
		},
		{
			prefecture_id: 38,
			name: "砥部町",
		},
		{
			prefecture_id: 38,
			name: "内子町",
		},
		{
			prefecture_id: 38,
			name: "伊方町",
		},
		{
			prefecture_id: 38,
			name: "松野町",
		},
		{
			prefecture_id: 38,
			name: "鬼北町",
		},
		{
			prefecture_id: 38,
			name: "愛南町",
		},
		{
			prefecture_id: 39,
			name: "高知市",
		},
		{
			prefecture_id: 39,
			name: "室戸市",
		},
		{
			prefecture_id: 39,
			name: "安芸市",
		},
		{
			prefecture_id: 39,
			name: "南国市",
		},
		{
			prefecture_id: 39,
			name: "土佐市",
		},
		{
			prefecture_id: 39,
			name: "須崎市",
		},
		{
			prefecture_id: 39,
			name: "宿毛市",
		},
		{
			prefecture_id: 39,
			name: "土佐清水市",
		},
		{
			prefecture_id: 39,
			name: "四万十市",
		},
		{
			prefecture_id: 39,
			name: "香南市",
		},
		{
			prefecture_id: 39,
			name: "香美市",
		},
		{
			prefecture_id: 39,
			name: "東洋町",
		},
		{
			prefecture_id: 39,
			name: "奈半利町",
		},
		{
			prefecture_id: 39,
			name: "田野町",
		},
		{
			prefecture_id: 39,
			name: "安田町",
		},
		{
			prefecture_id: 39,
			name: "北川村",
		},
		{
			prefecture_id: 39,
			name: "馬路村",
		},
		{
			prefecture_id: 39,
			name: "芸西村",
		},
		{
			prefecture_id: 39,
			name: "本山町",
		},
		{
			prefecture_id: 39,
			name: "大豊町",
		},
		{
			prefecture_id: 39,
			name: "土佐町",
		},
		{
			prefecture_id: 39,
			name: "大川村",
		},
		{
			prefecture_id: 39,
			name: "いの町",
		},
		{
			prefecture_id: 39,
			name: "仁淀川町",
		},
		{
			prefecture_id: 39,
			name: "中土佐町",
		},
		{
			prefecture_id: 39,
			name: "佐川町",
		},
		{
			prefecture_id: 39,
			name: "越知町",
		},
		{
			prefecture_id: 39,
			name: "梼原町",
		},
		{
			prefecture_id: 39,
			name: "日高村",
		},
		{
			prefecture_id: 39,
			name: "津野町",
		},
		{
			prefecture_id: 39,
			name: "四万十町",
		},
		{
			prefecture_id: 39,
			name: "大月町",
		},
		{
			prefecture_id: 39,
			name: "三原村",
		},
		{
			prefecture_id: 39,
			name: "黒潮町",
		},
		{
			prefecture_id: 40,
			name: "北九州市",
		},
		{
			prefecture_id: 40,
			name: "北九州市門司区",
		},
		{
			prefecture_id: 40,
			name: "北九州市若松区",
		},
		{
			prefecture_id: 40,
			name: "北九州市戸畑区",
		},
		{
			prefecture_id: 40,
			name: "北九州市小倉北区",
		},
		{
			prefecture_id: 40,
			name: "北九州市小倉南区",
		},
		{
			prefecture_id: 40,
			name: "北九州市八幡東区",
		},
		{
			prefecture_id: 40,
			name: "北九州市八幡西区",
		},
		{
			prefecture_id: 40,
			name: "福岡市",
		},
		{
			prefecture_id: 40,
			name: "福岡市東区",
		},
		{
			prefecture_id: 40,
			name: "福岡市博多区",
		},
		{
			prefecture_id: 40,
			name: "福岡市中央区",
		},
		{
			prefecture_id: 40,
			name: "福岡市南区",
		},
		{
			prefecture_id: 40,
			name: "福岡市西区",
		},
		{
			prefecture_id: 40,
			name: "福岡市城南区",
		},
		{
			prefecture_id: 40,
			name: "福岡市早良区",
		},
		{
			prefecture_id: 40,
			name: "大牟田市",
		},
		{
			prefecture_id: 40,
			name: "久留米市",
		},
		{
			prefecture_id: 40,
			name: "直方市",
		},
		{
			prefecture_id: 40,
			name: "飯塚市",
		},
		{
			prefecture_id: 40,
			name: "田川市",
		},
		{
			prefecture_id: 40,
			name: "柳川市",
		},
		{
			prefecture_id: 40,
			name: "八女市",
		},
		{
			prefecture_id: 40,
			name: "筑後市",
		},
		{
			prefecture_id: 40,
			name: "大川市",
		},
		{
			prefecture_id: 40,
			name: "行橋市",
		},
		{
			prefecture_id: 40,
			name: "豊前市",
		},
		{
			prefecture_id: 40,
			name: "中間市",
		},
		{
			prefecture_id: 40,
			name: "小郡市",
		},
		{
			prefecture_id: 40,
			name: "筑紫野市",
		},
		{
			prefecture_id: 40,
			name: "春日市",
		},
		{
			prefecture_id: 40,
			name: "大野城市",
		},
		{
			prefecture_id: 40,
			name: "宗像市",
		},
		{
			prefecture_id: 40,
			name: "太宰府市",
		},
		{
			prefecture_id: 40,
			name: "古賀市",
		},
		{
			prefecture_id: 40,
			name: "福津市",
		},
		{
			prefecture_id: 40,
			name: "うきは市",
		},
		{
			prefecture_id: 40,
			name: "宮若市",
		},
		{
			prefecture_id: 40,
			name: "嘉麻市",
		},
		{
			prefecture_id: 40,
			name: "朝倉市",
		},
		{
			prefecture_id: 40,
			name: "みやま市",
		},
		{
			prefecture_id: 40,
			name: "糸島市",
		},
		{
			prefecture_id: 40,
			name: "那珂川市",
		},
		{
			prefecture_id: 40,
			name: "宇美町",
		},
		{
			prefecture_id: 40,
			name: "篠栗町",
		},
		{
			prefecture_id: 40,
			name: "志免町",
		},
		{
			prefecture_id: 40,
			name: "須恵町",
		},
		{
			prefecture_id: 40,
			name: "新宮町",
		},
		{
			prefecture_id: 40,
			name: "久山町",
		},
		{
			prefecture_id: 40,
			name: "粕屋町",
		},
		{
			prefecture_id: 40,
			name: "芦屋町",
		},
		{
			prefecture_id: 40,
			name: "水巻町",
		},
		{
			prefecture_id: 40,
			name: "岡垣町",
		},
		{
			prefecture_id: 40,
			name: "遠賀町",
		},
		{
			prefecture_id: 40,
			name: "小竹町",
		},
		{
			prefecture_id: 40,
			name: "鞍手町",
		},
		{
			prefecture_id: 40,
			name: "桂川町",
		},
		{
			prefecture_id: 40,
			name: "筑前町",
		},
		{
			prefecture_id: 40,
			name: "東峰村",
		},
		{
			prefecture_id: 40,
			name: "大刀洗町",
		},
		{
			prefecture_id: 40,
			name: "大木町",
		},
		{
			prefecture_id: 40,
			name: "広川町",
		},
		{
			prefecture_id: 40,
			name: "香春町",
		},
		{
			prefecture_id: 40,
			name: "添田町",
		},
		{
			prefecture_id: 40,
			name: "糸田町",
		},
		{
			prefecture_id: 40,
			name: "川崎町",
		},
		{
			prefecture_id: 40,
			name: "大任町",
		},
		{
			prefecture_id: 40,
			name: "赤村",
		},
		{
			prefecture_id: 40,
			name: "福智町",
		},
		{
			prefecture_id: 40,
			name: "苅田町",
		},
		{
			prefecture_id: 40,
			name: "みやこ町",
		},
		{
			prefecture_id: 40,
			name: "吉富町",
		},
		{
			prefecture_id: 40,
			name: "上毛町",
		},
		{
			prefecture_id: 40,
			name: "築上町",
		},
		{
			prefecture_id: 41,
			name: "佐賀市",
		},
		{
			prefecture_id: 41,
			name: "唐津市",
		},
		{
			prefecture_id: 41,
			name: "鳥栖市",
		},
		{
			prefecture_id: 41,
			name: "多久市",
		},
		{
			prefecture_id: 41,
			name: "伊万里市",
		},
		{
			prefecture_id: 41,
			name: "武雄市",
		},
		{
			prefecture_id: 41,
			name: "鹿島市",
		},
		{
			prefecture_id: 41,
			name: "小城市",
		},
		{
			prefecture_id: 41,
			name: "嬉野市",
		},
		{
			prefecture_id: 41,
			name: "神埼市",
		},
		{
			prefecture_id: 41,
			name: "吉野ヶ里町",
		},
		{
			prefecture_id: 41,
			name: "基山町",
		},
		{
			prefecture_id: 41,
			name: "上峰町",
		},
		{
			prefecture_id: 41,
			name: "みやき町",
		},
		{
			prefecture_id: 41,
			name: "玄海町",
		},
		{
			prefecture_id: 41,
			name: "有田町",
		},
		{
			prefecture_id: 41,
			name: "大町町",
		},
		{
			prefecture_id: 41,
			name: "江北町",
		},
		{
			prefecture_id: 41,
			name: "白石町",
		},
		{
			prefecture_id: 41,
			name: "太良町",
		},
		{
			prefecture_id: 42,
			name: "長崎市",
		},
		{
			prefecture_id: 42,
			name: "佐世保市",
		},
		{
			prefecture_id: 42,
			name: "島原市",
		},
		{
			prefecture_id: 42,
			name: "諫早市",
		},
		{
			prefecture_id: 42,
			name: "大村市",
		},
		{
			prefecture_id: 42,
			name: "平戸市",
		},
		{
			prefecture_id: 42,
			name: "松浦市",
		},
		{
			prefecture_id: 42,
			name: "対馬市",
		},
		{
			prefecture_id: 42,
			name: "壱岐市",
		},
		{
			prefecture_id: 42,
			name: "五島市",
		},
		{
			prefecture_id: 42,
			name: "西海市",
		},
		{
			prefecture_id: 42,
			name: "雲仙市",
		},
		{
			prefecture_id: 42,
			name: "南島原市",
		},
		{
			prefecture_id: 42,
			name: "長与町",
		},
		{
			prefecture_id: 42,
			name: "時津町",
		},
		{
			prefecture_id: 42,
			name: "東彼杵町",
		},
		{
			prefecture_id: 42,
			name: "川棚町",
		},
		{
			prefecture_id: 42,
			name: "波佐見町",
		},
		{
			prefecture_id: 42,
			name: "小値賀町",
		},
		{
			prefecture_id: 42,
			name: "佐々町",
		},
		{
			prefecture_id: 42,
			name: "新上五島町",
		},
		{
			prefecture_id: 43,
			name: "熊本市",
		},
		{
			prefecture_id: 43,
			name: "熊本市中央区",
		},
		{
			prefecture_id: 43,
			name: "熊本市東区",
		},
		{
			prefecture_id: 43,
			name: "熊本市西区",
		},
		{
			prefecture_id: 43,
			name: "熊本市南区",
		},
		{
			prefecture_id: 43,
			name: "熊本市北区",
		},
		{
			prefecture_id: 43,
			name: "八代市",
		},
		{
			prefecture_id: 43,
			name: "人吉市",
		},
		{
			prefecture_id: 43,
			name: "荒尾市",
		},
		{
			prefecture_id: 43,
			name: "水俣市",
		},
		{
			prefecture_id: 43,
			name: "玉名市",
		},
		{
			prefecture_id: 43,
			name: "山鹿市",
		},
		{
			prefecture_id: 43,
			name: "菊池市",
		},
		{
			prefecture_id: 43,
			name: "宇土市",
		},
		{
			prefecture_id: 43,
			name: "上天草市",
		},
		{
			prefecture_id: 43,
			name: "宇城市",
		},
		{
			prefecture_id: 43,
			name: "阿蘇市",
		},
		{
			prefecture_id: 43,
			name: "天草市",
		},
		{
			prefecture_id: 43,
			name: "合志市",
		},
		{
			prefecture_id: 43,
			name: "美里町",
		},
		{
			prefecture_id: 43,
			name: "玉東町",
		},
		{
			prefecture_id: 43,
			name: "南関町",
		},
		{
			prefecture_id: 43,
			name: "長洲町",
		},
		{
			prefecture_id: 43,
			name: "和水町",
		},
		{
			prefecture_id: 43,
			name: "大津町",
		},
		{
			prefecture_id: 43,
			name: "菊陽町",
		},
		{
			prefecture_id: 43,
			name: "南小国町",
		},
		{
			prefecture_id: 43,
			name: "小国町",
		},
		{
			prefecture_id: 43,
			name: "産山村",
		},
		{
			prefecture_id: 43,
			name: "高森町",
		},
		{
			prefecture_id: 43,
			name: "西原村",
		},
		{
			prefecture_id: 43,
			name: "南阿蘇村",
		},
		{
			prefecture_id: 43,
			name: "御船町",
		},
		{
			prefecture_id: 43,
			name: "嘉島町",
		},
		{
			prefecture_id: 43,
			name: "益城町",
		},
		{
			prefecture_id: 43,
			name: "甲佐町",
		},
		{
			prefecture_id: 43,
			name: "山都町",
		},
		{
			prefecture_id: 43,
			name: "氷川町",
		},
		{
			prefecture_id: 43,
			name: "芦北町",
		},
		{
			prefecture_id: 43,
			name: "津奈木町",
		},
		{
			prefecture_id: 43,
			name: "錦町",
		},
		{
			prefecture_id: 43,
			name: "多良木町",
		},
		{
			prefecture_id: 43,
			name: "湯前町",
		},
		{
			prefecture_id: 43,
			name: "水上村",
		},
		{
			prefecture_id: 43,
			name: "相良村",
		},
		{
			prefecture_id: 43,
			name: "五木村",
		},
		{
			prefecture_id: 43,
			name: "山江村",
		},
		{
			prefecture_id: 43,
			name: "球磨村",
		},
		{
			prefecture_id: 43,
			name: "あさぎり町",
		},
		{
			prefecture_id: 43,
			name: "苓北町",
		},
		{
			prefecture_id: 44,
			name: "大分市",
		},
		{
			prefecture_id: 44,
			name: "別府市",
		},
		{
			prefecture_id: 44,
			name: "中津市",
		},
		{
			prefecture_id: 44,
			name: "日田市",
		},
		{
			prefecture_id: 44,
			name: "佐伯市",
		},
		{
			prefecture_id: 44,
			name: "臼杵市",
		},
		{
			prefecture_id: 44,
			name: "津久見市",
		},
		{
			prefecture_id: 44,
			name: "竹田市",
		},
		{
			prefecture_id: 44,
			name: "豊後高田市",
		},
		{
			prefecture_id: 44,
			name: "杵築市",
		},
		{
			prefecture_id: 44,
			name: "宇佐市",
		},
		{
			prefecture_id: 44,
			name: "豊後大野市",
		},
		{
			prefecture_id: 44,
			name: "由布市",
		},
		{
			prefecture_id: 44,
			name: "国東市",
		},
		{
			prefecture_id: 44,
			name: "姫島村",
		},
		{
			prefecture_id: 44,
			name: "日出町",
		},
		{
			prefecture_id: 44,
			name: "九重町",
		},
		{
			prefecture_id: 44,
			name: "玖珠町",
		},
		{
			prefecture_id: 45,
			name: "宮崎市",
		},
		{
			prefecture_id: 45,
			name: "都城市",
		},
		{
			prefecture_id: 45,
			name: "延岡市",
		},
		{
			prefecture_id: 45,
			name: "日南市",
		},
		{
			prefecture_id: 45,
			name: "小林市",
		},
		{
			prefecture_id: 45,
			name: "日向市",
		},
		{
			prefecture_id: 45,
			name: "串間市",
		},
		{
			prefecture_id: 45,
			name: "西都市",
		},
		{
			prefecture_id: 45,
			name: "えびの市",
		},
		{
			prefecture_id: 45,
			name: "三股町",
		},
		{
			prefecture_id: 45,
			name: "高原町",
		},
		{
			prefecture_id: 45,
			name: "国富町",
		},
		{
			prefecture_id: 45,
			name: "綾町",
		},
		{
			prefecture_id: 45,
			name: "高鍋町",
		},
		{
			prefecture_id: 45,
			name: "新富町",
		},
		{
			prefecture_id: 45,
			name: "西米良村",
		},
		{
			prefecture_id: 45,
			name: "木城町",
		},
		{
			prefecture_id: 45,
			name: "川南町",
		},
		{
			prefecture_id: 45,
			name: "都農町",
		},
		{
			prefecture_id: 45,
			name: "門川町",
		},
		{
			prefecture_id: 45,
			name: "諸塚村",
		},
		{
			prefecture_id: 45,
			name: "椎葉村",
		},
		{
			prefecture_id: 45,
			name: "美郷町",
		},
		{
			prefecture_id: 45,
			name: "高千穂町",
		},
		{
			prefecture_id: 45,
			name: "日之影町",
		},
		{
			prefecture_id: 45,
			name: "五ヶ瀬町",
		},
		{
			prefecture_id: 46,
			name: "鹿児島市",
		},
		{
			prefecture_id: 46,
			name: "鹿屋市",
		},
		{
			prefecture_id: 46,
			name: "枕崎市",
		},
		{
			prefecture_id: 46,
			name: "阿久根市",
		},
		{
			prefecture_id: 46,
			name: "出水市",
		},
		{
			prefecture_id: 46,
			name: "指宿市",
		},
		{
			prefecture_id: 46,
			name: "西之表市",
		},
		{
			prefecture_id: 46,
			name: "垂水市",
		},
		{
			prefecture_id: 46,
			name: "薩摩川内市",
		},
		{
			prefecture_id: 46,
			name: "日置市",
		},
		{
			prefecture_id: 46,
			name: "曽於市",
		},
		{
			prefecture_id: 46,
			name: "霧島市",
		},
		{
			prefecture_id: 46,
			name: "いちき串木野市",
		},
		{
			prefecture_id: 46,
			name: "南さつま市",
		},
		{
			prefecture_id: 46,
			name: "志布志市",
		},
		{
			prefecture_id: 46,
			name: "奄美市",
		},
		{
			prefecture_id: 46,
			name: "南九州市",
		},
		{
			prefecture_id: 46,
			name: "伊佐市",
		},
		{
			prefecture_id: 46,
			name: "姶良市",
		},
		{
			prefecture_id: 46,
			name: "三島村",
		},
		{
			prefecture_id: 46,
			name: "十島村",
		},
		{
			prefecture_id: 46,
			name: "さつま町",
		},
		{
			prefecture_id: 46,
			name: "長島町",
		},
		{
			prefecture_id: 46,
			name: "湧水町",
		},
		{
			prefecture_id: 46,
			name: "大崎町",
		},
		{
			prefecture_id: 46,
			name: "東串良町",
		},
		{
			prefecture_id: 46,
			name: "錦江町",
		},
		{
			prefecture_id: 46,
			name: "南大隅町",
		},
		{
			prefecture_id: 46,
			name: "肝付町",
		},
		{
			prefecture_id: 46,
			name: "中種子町",
		},
		{
			prefecture_id: 46,
			name: "南種子町",
		},
		{
			prefecture_id: 46,
			name: "屋久島町",
		},
		{
			prefecture_id: 46,
			name: "大和村",
		},
		{
			prefecture_id: 46,
			name: "宇検村",
		},
		{
			prefecture_id: 46,
			name: "瀬戸内町",
		},
		{
			prefecture_id: 46,
			name: "龍郷町",
		},
		{
			prefecture_id: 46,
			name: "喜界町",
		},
		{
			prefecture_id: 46,
			name: "徳之島町",
		},
		{
			prefecture_id: 46,
			name: "天城町",
		},
		{
			prefecture_id: 46,
			name: "伊仙町",
		},
		{
			prefecture_id: 46,
			name: "和泊町",
		},
		{
			prefecture_id: 46,
			name: "知名町",
		},
		{
			prefecture_id: 46,
			name: "与論町",
		},
		{
			prefecture_id: 47,
			name: "那覇市",
		},
		{
			prefecture_id: 47,
			name: "宜野湾市",
		},
		{
			prefecture_id: 47,
			name: "石垣市",
		},
		{
			prefecture_id: 47,
			name: "浦添市",
		},
		{
			prefecture_id: 47,
			name: "名護市",
		},
		{
			prefecture_id: 47,
			name: "糸満市",
		},
		{
			prefecture_id: 47,
			name: "沖縄市",
		},
		{
			prefecture_id: 47,
			name: "豊見城市",
		},
		{
			prefecture_id: 47,
			name: "うるま市",
		},
		{
			prefecture_id: 47,
			name: "宮古島市",
		},
		{
			prefecture_id: 47,
			name: "南城市",
		},
		{
			prefecture_id: 47,
			name: "国頭村",
		},
		{
			prefecture_id: 47,
			name: "大宜味村",
		},
		{
			prefecture_id: 47,
			name: "東村",
		},
		{
			prefecture_id: 47,
			name: "今帰仁村",
		},
		{
			prefecture_id: 47,
			name: "本部町",
		},
		{
			prefecture_id: 47,
			name: "恩納村",
		},
		{
			prefecture_id: 47,
			name: "宜野座村",
		},
		{
			prefecture_id: 47,
			name: "金武町",
		},
		{
			prefecture_id: 47,
			name: "伊江村",
		},
		{
			prefecture_id: 47,
			name: "読谷村",
		},
		{
			prefecture_id: 47,
			name: "嘉手納町",
		},
		{
			prefecture_id: 47,
			name: "北谷町",
		},
		{
			prefecture_id: 47,
			name: "北中城村",
		},
		{
			prefecture_id: 47,
			name: "中城村",
		},
		{
			prefecture_id: 47,
			name: "西原町",
		},
		{
			prefecture_id: 47,
			name: "与那原町",
		},
		{
			prefecture_id: 47,
			name: "南風原町",
		},
		{
			prefecture_id: 47,
			name: "渡嘉敷村",
		},
		{
			prefecture_id: 47,
			name: "座間味村",
		},
		{
			prefecture_id: 47,
			name: "粟国村",
		},
		{
			prefecture_id: 47,
			name: "渡名喜村",
		},
		{
			prefecture_id: 47,
			name: "南大東村",
		},
		{
			prefecture_id: 47,
			name: "北大東村",
		},
		{
			prefecture_id: 47,
			name: "伊平屋村",
		},
		{
			prefecture_id: 47,
			name: "伊是名村",
		},
		{
			prefecture_id: 47,
			name: "久米島町",
		},
		{
			prefecture_id: 47,
			name: "八重瀬町",
		},
		{
			prefecture_id: 47,
			name: "多良間村",
		},
		{
			prefecture_id: 47,
			name: "竹富町",
		},
		{
			prefecture_id: 47,
			name: "与那国町",
		},
	]);
	await knex("park").del();
	await knex("park").insert([
		{ user_id: 1, city_id: 1, name: "舞鶴公園" },
		{ user_id: 3, city_id: 2, name: "臨海公園" },
		{ user_id: 3, city_id: 2, name: "明石公園" },
	]);
	await knex("picture_books").del();
	await knex("picture_books").insert([
		{
			id: 1,
			book_name: "ねないこだれだ",
			age_of_children_id: 2,
			user_id: 1,
		},
		{
			id: 2,
			book_name: "ももたろう",
			age_of_children_id: 5,
			user_id: 1,
		},
		{
			id: 3,
			book_name: "くまのバディントン",
			age_of_children_id: 7,
			user_id: 2,
		},
	]);
	await knex("prefectures").del();
	await knex("prefectures").insert([
		{
			id: 1,
			name: "北海道",
		},
		{
			id: 2,
			name: "青森県",
		},
		{
			id: 3,
			name: "岩手県",
		},
		{
			id: 4,
			name: "宮城県",
		},
		{
			id: 5,
			name: "秋田県",
		},
		{
			id: 6,
			name: "山形県",
		},
		{
			id: 7,
			name: "福島県",
		},
		{
			id: 8,
			name: "茨城県",
		},
		{
			id: 9,
			name: "栃木県",
		},
		{
			id: 10,
			name: "群馬県",
		},
		{
			id: 11,
			name: "埼玉県",
		},
		{
			id: 12,
			name: "千葉県",
		},
		{
			id: 13,
			name: "東京都",
		},
		{
			id: 14,
			name: "神奈川県",
		},
		{
			id: 15,
			name: "新潟県",
		},
		{
			id: 16,
			name: "富山県",
		},
		{
			id: 17,
			name: "石川県",
		},
		{
			id: 18,
			name: "福井県",
		},
		{
			id: 19,
			name: "山梨県",
		},
		{
			id: 20,
			name: "長野県",
		},
		{
			id: 21,
			name: "岐阜県",
		},
		{
			id: 22,
			name: "静岡県",
		},
		{
			id: 23,
			name: "愛知県",
		},
		{
			id: 24,
			name: "三重県",
		},
		{
			id: 25,
			name: "滋賀県",
		},
		{
			id: 26,
			name: "京都府",
		},
		{
			id: 27,
			name: "大阪府",
		},
		{
			id: 28,
			name: "兵庫県",
		},
		{
			id: 29,
			name: "奈良県",
		},
		{
			id: 30,
			name: "和歌山県",
		},
		{
			id: 31,
			name: "鳥取県",
		},
		{
			id: 32,
			name: "島根県",
		},
		{
			id: 33,
			name: "岡山県",
		},
		{
			id: 34,
			name: "広島県",
		},
		{
			id: 35,
			name: "山口県",
		},
		{
			id: 36,
			name: "徳島県",
		},
		{
			id: 37,
			name: "香川県",
		},
		{
			id: 38,
			name: "愛媛県",
		},
		{
			id: 39,
			name: "高知県",
		},
		{
			id: 40,
			name: "福岡県",
		},
		{
			id: 41,
			name: "佐賀県",
		},
		{
			id: 42,
			name: "長崎県",
		},
		{
			id: 43,
			name: "熊本県",
		},
		{
			id: 44,
			name: "大分県",
		},
		{
			id: 45,
			name: "宮崎県",
		},
		{
			id: 46,
			name: "鹿児島県",
		},
		{
			id: 47,
			name: "沖縄県",
		},
	]);
};
