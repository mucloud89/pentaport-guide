import type { Language } from '../i18n/translations'

// SAMPLE — verify all answers before launch
export interface FAQ {
  id: string
  category: 'entry' | 'tickets' | 'onsite' | 'transport'
  question: string
  questionKo: string
  questionJa: string
  questionZh: string
  answer: string
  answerKo: string
  answerJa: string
  answerZh: string
}

export function faqQ(faq: FAQ, lang: Language): string {
  if (lang === 'ko') return faq.questionKo
  if (lang === 'ja') return faq.questionJa
  if (lang === 'zh') return faq.questionZh
  return faq.question
}

export function faqA(faq: FAQ, lang: Language): string {
  if (lang === 'ko') return faq.answerKo
  if (lang === 'ja') return faq.answerJa
  if (lang === 'zh') return faq.answerZh
  return faq.answer
}

export const faqs: FAQ[] = [
  {
    id: 'f1',
    category: 'entry',
    question: 'Can I re-enter the festival after leaving?',
    questionKo: '한번 나가면 재입장 가능한가요?',
    questionJa: '一度退場した後、再入場できますか？',
    questionZh: '离开后可以再次入场吗？',
    answer: 'Re-entry is allowed with a wristband. Do not remove your wristband.',
    answerKo: '손목밴드 착용 시 재입장 가능. 손목밴드를 제거하지 마세요.',
    answerJa: 'リストバンドを着用していれば再入場できます。リストバンドは絶対に外さないでください。',
    answerZh: '佩戴手环可以自由再次入场。请勿摘下手环。',
  },
  {
    id: 'f2',
    category: 'entry',
    question: 'What ID do I need to bring?',
    questionKo: '어떤 신분증이 필요한가요?',
    questionJa: 'どのような身分証明書が必要ですか？',
    questionZh: '需要携带什么证件？',
    answer: 'Bring your passport or any government-issued photo ID. Foreigners: passport recommended.',
    answerKo: '여권 또는 정부 발급 사진 신분증. 외국인: 여권 권장.',
    answerJa: 'パスポートまたは政府発行の顔写真付き身分証明書をご持参ください。外国人の方はパスポート推奨です。',
    answerZh: '请携带护照或政府颁发的带照片证件。外国游客建议携带护照。',
  },
  {
    id: 'f3',
    category: 'tickets',
    question: 'Can I buy tickets at the gate?',
    questionKo: '현장에서 티켓 구매 가능한가요?',
    questionJa: '当日券は会場で購入できますか？',
    questionZh: '可以在现场购票吗？',
    answer: 'On-site tickets may be available if not sold out, but online purchase is strongly recommended.',
    answerKo: '매진이 아닌 경우 현장 구매 가능하나, 온라인 사전 구매 강력 권장.',
    answerJa: '売り切れでなければ当日券の購入が可能な場合がありますが、オンラインでの事前購入を強くお勧めします。',
    answerZh: '未售罄情况下可能可以现场购票，但强烈建议提前在线购买。',
  },
  {
    id: 'f4',
    category: 'tickets',
    question: 'Are there discounts for foreigners?',
    questionKo: '외국인 할인이 있나요?',
    questionJa: '外国人向けの割引はありますか？',
    questionZh: '有外国游客优惠吗？',
    answer: 'No special foreigner discount. Check the official site for any early-bird or group deals.',
    answerKo: '외국인 특별 할인 없음. 얼리버드/단체 할인은 공식 사이트 확인.',
    answerJa: '外国人向けの特別割引はありません。早割・グループ割引については公式サイトでご確認ください。',
    answerZh: '没有外国游客特别优惠。早鸟票或团体优惠请查看官方网站。',
  },
  {
    id: 'f5',
    category: 'onsite',
    question: 'Can I bring food and drinks?',
    questionKo: '음식이나 음료 반입 가능한가요?',
    questionJa: '食べ物や飲み物の持ち込みはできますか？',
    questionZh: '可以携带食物和饮料入场吗？',
    answer: 'Sealed bottled water is usually allowed. Outside food and alcohol are typically prohibited.',
    answerKo: '밀봉된 생수는 보통 허용. 외부 음식·주류는 대체로 반입 금지.',
    answerJa: '密封されたペットボトルの水は通常持ち込み可能です。外部の食べ物やアルコールは基本的に禁止されています。',
    answerZh: '密封瓶装水通常可以携带。外部食物和酒精饮料一般禁止带入。',
  },
  {
    id: 'f6',
    category: 'onsite',
    question: 'Is there a bag size limit?',
    questionKo: '가방 크기 제한이 있나요?',
    questionJa: 'バッグのサイズ制限はありますか？',
    questionZh: '对包的尺寸有限制吗？',
    answer: 'Bags may be subject to security screening. Large backpacks and coolers may be prohibited.',
    answerKo: '보안 검색 있음. 대형 배낭/아이스박스 반입 불가 가능.',
    answerJa: 'バッグはセキュリティ検査の対象となる場合があります。大型バックパックやクーラーボックスは持ち込めない場合があります。',
    answerZh: '包可能需要接受安检。大型背包和冰箱可能被禁止带入。',
  },
  {
    id: 'f7',
    category: 'transport',
    question: 'Is there a shuttle bus from Seoul?',
    questionKo: '서울에서 셔틀버스가 있나요?',
    questionJa: 'ソウルからシャトルバスはありますか？',
    questionZh: '有从首尔出发的班车吗？',
    answer: 'Shuttle buses from Seoul may be operated. Check the official site closer to the event.',
    answerKo: '서울발 셔틀버스 운행 가능. 행사 가까워지면 공식 사이트 확인.',
    answerJa: 'ソウルからのシャトルバスが運行される場合があります。イベント直前に公式サイトをご確認ください。',
    answerZh: '可能会运营从首尔出发的班车。请在活动临近时查看官方网站获取最新信息。',
  },
  {
    id: 'f8',
    category: 'transport',
    question: 'Can I drive and park?',
    questionKo: '자가용으로 주차 가능한가요?',
    questionJa: '車で来場して駐車できますか？',
    questionZh: '可以自驾并停车吗？',
    answer: 'Limited parking is available. Public transport is strongly recommended — traffic is heavy on festival days.',
    answerKo: '주차 공간 제한적. 축제 당일 교통 혼잡으로 대중교통 강력 권장.',
    answerJa: '駐車スペースは限られています。当日は交通渋滞が激しいため、公共交通機関の利用を強くお勧めします。',
    answerZh: '停车位有限。由于节日当天交通拥堵，强烈建议乘坐公共交通。',
  },
]
