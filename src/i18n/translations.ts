export type Language = 'en' | 'ko' | 'ja' | 'zh'

export interface T {
  // Navigation
  nav: { info: string; notices: string; transport: string; amenities: string; onsite: string }
  // Header
  header: { title: string; subtitle: string }
  // Info / Lineup
  info: {
    title: string
    stage: { main: string; club: string; indie: string }
    headliner: string
    tba: string
    sampleNote: string
  }
  // Transport
  transport: {
    title: string
    subway: { title: string; lines: string[] }
    bus: { title: string; lines: string[] }
    taxi: { title: string; desc: string }
    tips: { title: string; items: string[] }
    mapTitle: string
    mapNote: string
  }
  // Amenities
  amenities: {
    title: string
    sections: { icon: string; title: string; desc: string }[]
    hospitalTitle: string
    pharmacyTitle: string
    convenienceTitle: string
    atmTitle: string
    hoursUnavailable: string
    copyHint: string
    copied: string
    sampleNote: string
  }
  // On-site
  onsite: {
    title: string
    emergency: { title: string; items: { label: string; value: string }[] }
    rules: { title: string; items: string[] }
    lost: { title: string; desc: string }
    info: { title: string; desc: string }
    sns: { title: string }
  }
  // Survey
  survey: {
    title: string
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q4Placeholder: string
    q5Placeholder: string
    countryLabel: string
    ratingLabel: string
    helpfulLabel: string
    yes: string
    no: string
    submit: string
    thanks: string
  }
  // Maps widget
  maps: { title: string; tapHint: string; destinationLabel: string; destinationName: string }
  // Language names
  langName: string
}

const en: T = {
  nav: { info: 'Lineup', notices: 'Notices', transport: 'Getting Here', amenities: 'Amenities', onsite: 'On-Site' },
  header: { title: 'Pentaport', subtitle: 'Rock Festival 2026 · Incheon' },
  info: {
    title: 'Lineup',
    stage: { main: 'Main Stage', club: 'Club Stage', indie: 'Indie Stage' },
    headliner: 'HEADLINER',
    tba: 'TBA',
    sampleNote: '⚠ Placeholder lineup — load the official schedule from pentaport.co.kr',
  },
  transport: {
    title: 'Getting Here',
    subway: {
      title: '🚇 Subway (recommended)',
      lines: [
        'Take Incheon Subway Line 1 to Techno Park station (테크노파크역)',
        'Exit 1 → 10–15 min walk or short taxi ride to the venue',
        'From Seoul: take Line 1 toward Incheon (~70 min from Seoul Station)',
      ],
    },
    bus: {
      title: '🚌 Bus',
      lines: [
        'Incheon city buses stop near Songdo area — check the official site for festival shuttle info',
        'KTX/SRT to Incheon not recommended — subway is faster from central Seoul',
      ],
    },
    taxi: {
      title: '🚕 Taxi / Ride-share',
      desc: 'Kakao T app is the easiest way to hail a taxi in Korea. Say "Pentaport" or show the Korean address: 인천시 연수구 송도동 (달빛축제공원). Expect ₩15,000–25,000 from Bupyeong station.',
    },
    tips: {
      title: '💡 Tips for foreigners',
      items: [
        'Google Maps walking/transit is less reliable in Korea — use Naver Maps or Kakao Maps for transit directions',
        'T-Money card works on subway + buses — buy at any convenience store',
        'Taxis are affordable; show the driver the Korean address on your phone',
        'Traffic is very heavy on festival days — plan 30+ min extra',
      ],
    },
    mapTitle: 'Open in map app',
    mapNote: 'Google walking/transit directions can be inaccurate in Korea. Naver Maps is most reliable for transit.',
  },
  amenities: {
    title: 'Amenities',
    sampleNote: '⚠ Sample — verify all locations with organizer or on-site staff',
    sections: [
      { icon: '🍜', title: 'Food Village', desc: 'Korean street food, international trucks, and beverages. Card & cash accepted.' },
      { icon: '💧', title: 'Free Water', desc: 'Refill stations at entrance and near each stage. Bring a reusable bottle.' },
      { icon: '🏥', title: 'Medical', desc: 'Two medical stations staffed throughout the day. Call 119 for emergencies.' },
      { icon: '🔒', title: 'Lockers', desc: 'Pay lockers near main entrance. Small ₩3,000 / Large ₩5,000 per day. (SAMPLE price)' },
      { icon: '🚻', title: 'Restrooms', desc: 'Permanent and portable restrooms distributed across the venue.' },
      { icon: '🔋', title: 'Charging', desc: 'Phone charging stations with USB-A, USB-C, and Lightning. SAMPLE — verify availability.' },
    ],
    hospitalTitle: 'Nearest hospitals',
    pharmacyTitle: 'Nearest pharmacies',
    convenienceTitle: 'Nearby convenience stores',
    atmTitle: 'Nearby ATMs',
    hoursUnavailable: 'Hours unavailable',
    copyHint: 'Tap an address to copy it — then paste into your map app.',
    copied: 'Copied!',
  },
  onsite: {
    title: 'On-Site Help',
    emergency: {
      title: '🚨 Emergency contacts',
      items: [
        { label: 'Emergency / Ambulance', value: '119' },
        { label: 'Police', value: '112' },
        { label: 'Festival Hotline', value: '+82-1899-6709' },
        { label: 'Tourist Helpline', value: '1330 (Korean / English / Chinese / Japanese)' },
      ],
    },
    rules: {
      title: '📋 Festival rules',
      items: [
        'No outside food or alcohol',
        'No professional cameras (detachable lens)',
        'No drones',
        'Do not remove your wristband — required for re-entry',
        'No crowd surfing or moshing in restricted areas',
        'Follow staff instructions at all times',
      ],
    },
    lost: {
      title: '🔍 Lost & found',
      desc: 'Go to the Information Booth near the main entrance. Staff speak English. You can also call the festival hotline.',
    },
    info: {
      title: 'ℹ️ Information booth',
      desc: 'English-speaking staff at the main entrance booth. Ask for maps, lost items, first aid, or any help you need.',
    },
    sns: { title: 'Official SNS' },
  },
  survey: {
    title: 'Quick feedback',
    q1: 'Where are you from?',
    q2: 'How useful was this guide? (1–5)',
    q3: 'Would you recommend this guide to other foreign visitors?',
    q4: 'What would you like to see added to this guide?',
    q5: 'What could be improved in this guide?',
    q4Placeholder: 'e.g. more transport options, maps, photos…',
    q5Placeholder: 'e.g. missing info, hard to read, wrong data…',
    countryLabel: 'Country',
    ratingLabel: 'Rating',
    helpfulLabel: 'Recommend?',
    yes: 'Yes',
    no: 'No',
    submit: 'Submit',
    thanks: 'Thanks for your feedback! 🎸',
  },
  maps: { title: 'Get directions', tapHint: 'Tap to open', destinationLabel: 'Destination', destinationName: 'Songdo Moonlight Festival Park' },
  langName: 'English',
}

const ko: T = {
  nav: { info: '라인업', notices: '공지사항', transport: '오시는 길', amenities: '편의시설', onsite: '현장 도움말' },
  header: { title: '펜타포트', subtitle: '락 페스티벌 2026 · 인천' },
  info: {
    title: '라인업',
    stage: { main: '메인 스테이지', club: '클럽 스테이지', indie: '인디 스테이지' },
    headliner: '헤드라이너',
    tba: '미정',
    sampleNote: '⚠ 샘플 라인업 — 공식 일정은 pentaport.co.kr에서 확인하세요',
  },
  transport: {
    title: '오시는 길',
    subway: {
      title: '🚇 지하철 (권장)',
      lines: [
        '인천 지하철 1호선 테크노파크역 하차',
        '1번 출구 → 도보 10~15분 또는 짧은 택시 이용',
        '서울에서: 1호선 인천 방면 (~70분)',
      ],
    },
    bus: {
      title: '🚌 버스',
      lines: [
        '인천 시내버스 송도 지역 정류장 이용 — 셔틀버스 정보는 공식 사이트 확인',
        'KTX/SRT 인천 방면은 지하철보다 불편',
      ],
    },
    taxi: {
      title: '🚕 택시 / 카카오T',
      desc: '카카오T 앱으로 택시를 쉽게 부를 수 있습니다. "펜타포트" 또는 "달빛축제공원"을 말하거나 보여주세요. 부평역에서 약 ₩15,000~25,000 예상.',
    },
    tips: {
      title: '💡 팁',
      items: [
        '구글 지도 도보/대중교통은 한국에서 부정확할 수 있음 — 네이버/카카오맵 권장',
        'T-money 카드는 지하철·버스 모두 사용 가능 — 편의점에서 구매',
        '택시 기사님께 핸드폰으로 한국어 주소를 보여주세요',
        '행사 당일 교통 혼잡 — 30분 이상 여유 있게 출발',
      ],
    },
    mapTitle: '지도 앱에서 열기',
    mapNote: '한국에서 구글 지도 대중교통 경로는 부정확할 수 있습니다. 네이버 지도가 가장 정확합니다.',
  },
  amenities: {
    title: '편의시설',
    sampleNote: '⚠ 샘플 — 정확한 위치는 주최측 또는 현장 스태프에게 확인하세요',
    sections: [
      { icon: '🍜', title: '푸드빌리지', desc: '한식, 푸드트럭, 음료. 카드·현금 모두 가능.' },
      { icon: '💧', title: '무료 생수', desc: '입구 및 각 스테이지 인근 보충 포인트. 텀블러 지참 권장.' },
      { icon: '🏥', title: '의무실', desc: '상설 의무실 2곳 운영. 응급 상황 시 119.' },
      { icon: '🔒', title: '물품보관소', desc: '메인 입구 근처. 소 ₩3,000 / 대 ₩5,000 (샘플).' },
      { icon: '🚻', title: '화장실', desc: '상설 및 이동식 화장실 곳곳 배치.' },
      { icon: '🔋', title: '충전소', desc: 'USB-A, USB-C, 라이트닝 제공. 샘플 — 현장 확인.' },
    ],
    hospitalTitle: '인근 병원',
    pharmacyTitle: '인근 약국',
    convenienceTitle: '인근 편의점',
    atmTitle: '인근 ATM',
    hoursUnavailable: '영업시간 정보 없음',
    copyHint: '주소를 터치하면 복사됩니다. 복사 후 지도 앱에 붙여넣으세요.',
    copied: '복사됨!',
  },
  onsite: {
    title: '현장 도움말',
    emergency: {
      title: '🚨 긴급 연락처',
      items: [
        { label: '응급 / 구급대', value: '119' },
        { label: '경찰', value: '112' },
        { label: '페스티벌 핫라인', value: '1899-6709' },
        { label: '관광 안내 전화', value: '1330 (한국어 / 영어 / 중국어 / 일본어)' },
      ],
    },
    rules: {
      title: '📋 행사 규정',
      items: [
        '외부 음식·주류 반입 금지',
        '전문가용 카메라(분리형 렌즈) 반입 금지',
        '드론 반입 금지',
        '손목밴드 제거 금지 — 재입장 시 필요',
        '제한 구역 내 크라우드서핑·모싱 금지',
        '스태프 지시 준수',
      ],
    },
    lost: {
      title: '🔍 분실물 센터',
      desc: '메인 입구 근처 안내 부스로 가세요. 영어 스태프 상주. 페스티벌 핫라인으로도 연락 가능.',
    },
    info: {
      title: 'ℹ️ 안내 부스',
      desc: '메인 입구 안내 부스에 영어 스태프가 상주합니다. 지도, 분실물, 응급처치 등 도움 요청 가능.',
    },
    sns: { title: '공식 SNS' },
  },
  survey: {
    title: '빠른 피드백',
    q1: '어느 나라에서 오셨나요?',
    q2: '이 가이드가 얼마나 유용했나요? (1~5점)',
    q3: '다른 외국인 방문객에게 이 가이드를 추천하시겠어요?',
    q4: '이 가이드에서 추가로 원하는 것이 있다면 무엇인가요?',
    q5: '이 가이드의 아쉬운 점은 무엇인가요?',
    q4Placeholder: '예) 더 많은 교통 정보, 지도, 사진 등',
    q5Placeholder: '예) 부족한 정보, 불편한 UI, 잘못된 데이터 등',
    countryLabel: '국가',
    ratingLabel: '평점',
    helpfulLabel: '추천?',
    yes: '네',
    no: '아니오',
    submit: '제출',
    thanks: '피드백 감사합니다! 🎸',
  },
  maps: { title: '길 찾기', tapHint: '탭하여 열기', destinationLabel: '목적지', destinationName: '송도 달빛 축제 공원' },
  langName: '한국어',
}

// Japanese — full translation
const ja: T = {
  nav: { info: 'ラインナップ', notices: 'お知らせ', transport: 'アクセス', amenities: '設備', onsite: '会場ヘルプ' },
  header: { title: 'ペンタポート', subtitle: 'ロックフェスティバル 2026 · 仁川' },
  info: {
    title: 'ラインナップ',
    stage: { main: 'メインステージ', club: 'クラブステージ', indie: 'インディーステージ' },
    headliner: 'ヘッドライナー',
    tba: '未定',
    sampleNote: '⚠ サンプル — 公式スケジュールは pentaport.co.kr で確認',
  },
  transport: {
    title: 'アクセス',
    subway: {
      title: '🚇 地下鉄（推奨）',
      lines: [
        '仁川地下鉄1号線 テクノパーク駅（테크노파크역）下車',
        '1番出口 → 徒歩10〜15分、またはタクシーで会場へ',
        'ソウルから：1号線仁川方面（ソウル駅から約70分）',
      ],
    },
    bus: {
      title: '🚌 バス',
      lines: [
        '仁川市バスがソンド地区周辺に停車 — シャトルバス情報は公式サイトで確認',
        'KTX/SRTは地下鉄より不便なためあまりお勧めしません',
      ],
    },
    taxi: {
      title: '🚕 タクシー / Kakao T',
      desc: 'タクシーはKakao Tアプリで簡単に呼べます。「ペンタポート」または韓国語住所（인천광역시 연수구 센트럴로 350）を画面で見せてください。富平駅からは₩15,000〜25,000程度の見込みです。',
    },
    tips: {
      title: '💡 外国人向けのヒント',
      items: [
        'Googleマップの徒歩・交通経路は韓国では不正確な場合があります — NaverマップかKakaoマップを推奨',
        'T-Moneyカードは地下鉄・バス共通で利用可能 — コンビニで購入できます',
        '運転手にスマートフォンで韓国語の住所を見せてください',
        '当日は渋滞が激しいため、30分以上余裕を持ってお出かけください',
      ],
    },
    mapTitle: '地図アプリで開く',
    mapNote: '韓国ではGoogleマップの交通経路が不正確な場合があります。Naverマップが最も信頼できます。',
  },
  amenities: {
    title: '設備・サービス',
    sampleNote: '⚠ サンプル — 正確な場所は主催者または現地スタッフにご確認ください',
    sections: [
      { icon: '🍜', title: 'フードビレッジ', desc: '韓国屋台、フードトラック、飲み物。カード・現金両方可。' },
      { icon: '💧', title: '無料給水', desc: '入口と各ステージ付近に補充ポイントあり。マイボトル持参推奨。' },
      { icon: '🏥', title: '救護室', desc: '終日スタッフ常駐の救護室2か所。緊急時は119へ。' },
      { icon: '🔒', title: 'コインロッカー', desc: 'メイン入口付近。小₩3,000 / 大₩5,000（1日・サンプル価格）。' },
      { icon: '🚻', title: 'トイレ', desc: '常設・仮設トイレが会場各所に設置。' },
      { icon: '🔋', title: '充電スタンド', desc: 'USB-A、USB-C、Lightning対応。サンプル — 現地でご確認ください。' },
    ],
    hospitalTitle: '近隣の病院',
    pharmacyTitle: '近隣の薬局',
    convenienceTitle: '近くのコンビニ',
    atmTitle: '近くのATM',
    hoursUnavailable: '営業時間不明',
    copyHint: '住所をタップするとコピーされます。地図アプリに貼り付けてください。',
    copied: 'コピーしました！',
  },
  onsite: {
    title: '会場ヘルプ',
    emergency: {
      title: '🚨 緊急連絡先',
      items: [
        { label: '救急・消防', value: '119' },
        { label: '警察', value: '112' },
        { label: 'フェスティバル専用回線', value: '+82-1899-6709' },
        { label: '観光案内電話', value: '1330（韓国語・英語・中国語・日本語対応）' },
      ],
    },
    rules: {
      title: '📋 会場ルール',
      items: [
        '外部からの食べ物・アルコールの持ち込み禁止',
        'プロ用カメラ（交換レンズ）の持ち込み禁止',
        'ドローンの持ち込み禁止',
        'リストバンドを外さないでください — 再入場時に必要です',
        '指定エリア外でのクラウドサーフィン・モッシュ禁止',
        'スタッフの指示に従ってください',
      ],
    },
    lost: {
      title: '🔍 遺失物センター',
      desc: 'メイン入口付近のインフォメーションブースへお越しください。英語対応スタッフが常駐しています。フェスティバル専用回線でもご連絡いただけます。',
    },
    info: {
      title: 'ℹ️ インフォメーションブース',
      desc: 'メイン入口のインフォメーションブースに英語対応スタッフが常駐しています。地図、遺失物、応急処置など、お気軽にお声がけください。',
    },
    sns: { title: '公式SNS' },
  },
  survey: {
    title: '簡単なフィードバック',
    q1: 'どちらからお越しですか？',
    q2: 'このガイドはどのくらい役立ちましたか？（1〜5）',
    q3: '他の外国人訪問者にこのガイドを勧めますか？',
    q4: 'このガイドに追加してほしいものはありますか？',
    q5: 'このガイドで改善してほしい点はありますか？',
    q4Placeholder: '例）より多くの交通情報、地図、写真など',
    q5Placeholder: '例）不足している情報、使いにくいUI、誤ったデータなど',
    countryLabel: '国',
    ratingLabel: '評価',
    helpfulLabel: 'おすすめ？',
    yes: 'はい',
    no: 'いいえ',
    submit: '送信',
    thanks: 'フィードバックありがとうございます！ 🎸',
  },
  maps: { title: '地図アプリで開く', tapHint: 'タップして開く', destinationLabel: '目的地', destinationName: '仁川松島ムーンライトフェスティバルパーク' },
  langName: '日本語',
}

// Chinese — full translation
const zh: T = {
  nav: { info: '演出阵容', notices: '公告', transport: '交通', amenities: '设施', onsite: '现场帮助' },
  header: { title: '奔塔港', subtitle: '摇滚音乐节 2026 · 仁川' },
  info: {
    title: '演出阵容',
    stage: { main: '主舞台', club: '俱乐部舞台', indie: '独立舞台' },
    headliner: '压轴艺人',
    tba: '待公布',
    sampleNote: '⚠ 示例阵容 — 请在 pentaport.co.kr 查看官方日程',
  },
  transport: {
    title: '交通指南',
    subway: {
      title: '🚇 地铁（推荐）',
      lines: [
        '乘仁川地铁1号线至테크노파크역（Techno Park站）下车',
        '1号出口 → 步行约10-15分钟或短途打车至会场',
        '从首尔出发：乘1号线仁川方向（从首尔站约70分钟）',
      ],
    },
    bus: {
      title: '🚌 公交车',
      lines: [
        '仁川市内公交车在松岛区域有停靠站 — 班车信息请查看官方网站',
        'KTX/SRT前往仁川不如地铁方便',
      ],
    },
    taxi: {
      title: '🚕 出租车 / Kakao T',
      desc: '在韩国打车最方便的方式是使用Kakao T应用。请告诉司机「펜타포트」或将地址（인천광역시 연수구 센트럴로 350）展示给司机看。从富平站预计₩15,000~25,000。',
    },
    tips: {
      title: '💡 外国游客小贴士',
      items: [
        'Google地图的步行/公交路线在韩国可能不够准确 — 推荐使用Naver地图或Kakao地图',
        'T-Money卡可在地铁和公交上使用 — 便利店均可购买',
        '乘出租车时请将韩文地址展示给司机',
        '演出当天交通较为拥堵，建议提前30分钟以上出发',
      ],
    },
    mapTitle: '在地图应用中打开',
    mapNote: '在韩国，Google地图的公共交通路线可能不够准确。Naver地图是最可靠的选择。',
  },
  amenities: {
    title: '场馆设施',
    sampleNote: '⚠ 示例数据 — 具体位置请向主办方或现场工作人员确认',
    sections: [
      { icon: '🍜', title: '美食村', desc: '韩式街头小吃、餐车和饮料。支持刷卡和现金。' },
      { icon: '💧', title: '免费饮水', desc: '入口及各舞台附近设有补水点，建议自带水杯。' },
      { icon: '🏥', title: '医疗站', desc: '全天设有2处医疗站。紧急情况请拨打119。' },
      { icon: '🔒', title: '行李寄存', desc: '主入口附近，小号₩3,000 / 大号₩5,000（每天·示例价格）。' },
      { icon: '🚻', title: '卫生间', desc: '场馆内设有固定及临时卫生间。' },
      { icon: '🔋', title: '充电站', desc: '提供USB-A、USB-C和Lightning接口。示例 — 请在现场确认。' },
    ],
    hospitalTitle: '附近医院',
    pharmacyTitle: '附近药店',
    convenienceTitle: '附近便利店',
    atmTitle: '附近ATM',
    hoursUnavailable: '营业时间未知',
    copyHint: '点击地址即可复制，然后粘贴到地图应用中导航。',
    copied: '已复制！',
  },
  onsite: {
    title: '现场帮助',
    emergency: {
      title: '🚨 紧急联系方式',
      items: [
        { label: '急救/救护车', value: '119' },
        { label: '警察', value: '112' },
        { label: '音乐节热线', value: '+82-1899-6709' },
        { label: '旅游咨询热线', value: '1330（韩/英/中/日语服务）' },
      ],
    },
    rules: {
      title: '📋 场馆规定',
      items: [
        '禁止携带外部食物及酒精饮料入场',
        '禁止携带专业相机（可换镜头）',
        '禁止携带无人机',
        '请勿摘下手环 — 再次入场时需要',
        '禁止在限制区域内进行人浪冲浪和肢体碰撞',
        '请遵守工作人员的指示',
      ],
    },
    lost: {
      title: '🔍 失物招领处',
      desc: '请前往主入口附近的服务台。配有英语工作人员。也可拨打音乐节热线联系。',
    },
    info: {
      title: 'ℹ️ 服务台',
      desc: '主入口服务台常驻英语工作人员，可提供地图、失物招领、急救等各类帮助。',
    },
    sns: { title: '官方社交媒体' },
  },
  survey: {
    title: '快速反馈',
    q1: '您来自哪个国家？',
    q2: '这份指南对您有多大帮助？（1-5分）',
    q3: '您会向其他外国游客推荐这份指南吗？',
    q4: '您希望在本指南中增加哪些内容？',
    q5: '您觉得本指南有哪些不足之处？',
    q4Placeholder: '例如：更多交通信息、地图、照片等',
    q5Placeholder: '例如：缺少信息、界面不友好、数据有误等',
    countryLabel: '国家',
    ratingLabel: '评分',
    helpfulLabel: '推荐？',
    yes: '是',
    no: '否',
    submit: '提交',
    thanks: '感谢您的反馈！🎸',
  },
  maps: { title: '在地图应用中打开', tapHint: '点击打开', destinationLabel: '目的地', destinationName: '仁川松岛月光节公园' },
  langName: '中文',
}

export const translations: Record<Language, T> = { en, ko, ja, zh }
