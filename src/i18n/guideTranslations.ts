import type { Language } from './translations'

export interface GuideStep {
  title: string
  desc: string
  warning?: string
  tip?: string
  image?: string
}

export interface GuideTranslation {
  heading: string
  linkBtn: string
  steps: GuideStep[]
}

const en: GuideTranslation = {
  heading: 'Step-by-step purchase guide',
  linkBtn: 'Open NOL World ticketing page',
  steps: [
    {
      title: '① Go to the NOL World ticketing page',
      desc: 'Open the official global ticketing page using the button above. Make sure the site language is set to English.',
      image: '/guide-images/guide-a-poster-opt.webp',
    },
    {
      title: '② Check ticket prices',
      desc: "Refer to the Price section for ticket prices.\n\n• Regular 3-day pass — ₩240,000 (Jul 31 – Aug 2)\n• Regular 1-day pass — ₩120,000 (choose any one day)",
      image: '/guide-images/guide-b-price-opt.webp',
    },
    {
      title: "③ Tap 'Buy now' → Identity verification",
      desc: "Tap the blue 'Buy now' button. An authentication screen will appear: \"Authentication is required to conduct the booking process.\" Tap 'Verify your identity' to continue.",
      image: '/guide-images/guide-e-auth.webp',
    },
    {
      title: '④ Scan the QR code with your phone',
      desc: "A QR code will appear on screen. Open your phone camera and scan it. This opens the identity verification step on your mobile device. Follow the on-screen instructions to complete verification.",
      image: '/guide-images/guide-f-qr.webp',
    },
    {
      title: '⑤ Log in or create a NOL World account',
      desc: "After verification, you'll be taken to the login screen. Sign in with Google, LINE, or Apple — or use your email.\n\nNo account yet? Tap 'Sign up with Email', enter your email, enter the verification code sent to your inbox, and set a password. Takes about 2 minutes.",
      tip: 'Alipay, Weibo, and Facebook logins are no longer supported.',
      image: '/guide-images/guide-c-login-opt.webp',
    },
    {
      title: '⑥ Select ticket type & date',
      desc: "After logging in, tap 'Buy now' again. Choose your ticket:\n• 1-day pass → select a date: Jul 31 (Fri), Aug 1 (Sat), or Aug 2 (Sun)\n• 3-day pass → covers all three days automatically",
    },
    {
      title: '⑦ Pay with an overseas card',
      desc: 'Enter your Visa or Mastercard details and complete payment.',
      warning: 'Korean domestic cards are NOT accepted on this global page. KB Kookmin Card discounts are also unavailable here.',
    },
    {
      title: '⑧ Save your mobile ticket',
      desc: "After payment, find your QR code ticket in the NOL World app or website under 'My Tickets'.",
      warning: 'Download your ticket BEFORE arriving at the venue — on-site data is congested and the ticket may fail to load.',
    },
    {
      title: '⑨ Exchange for a wristband at the gate',
      desc: 'On the day, show your QR code at the entrance. Staff will exchange it for a wristband. Keep it on for the entire event — wristbands are never re-issued, even if lost.',
    },
  ],
}

const ko: GuideTranslation = {
  heading: '단계별 티켓 구매 가이드',
  linkBtn: 'NOL World 티켓 구매 페이지 열기',
  steps: [
    {
      title: '① NOL World 티켓 페이지 접속',
      desc: '위 버튼을 눌러 공식 글로벌 티켓 구매 페이지를 여세요. 사이트 언어가 영어(English)로 설정되어 있는지 확인하세요.',
      image: '/guide-images/guide-a-poster-opt.webp',
    },
    {
      title: '② 티켓 가격 확인',
      desc: "Price 항목에서 티켓 가격을 참조하세요.\n\n• 3일권 — ₩240,000 (7/31 – 8/2)\n• 1일권 — ₩120,000 (원하는 날 1일 선택)",
      image: '/guide-images/guide-b-price-opt.webp',
    },
    {
      title: "③ 'Buy now' 클릭 → 신원 확인",
      desc: "파란색 'Buy now' 버튼을 클릭하세요. '예매 진행을 위해 본인 인증이 필요합니다' 화면이 나타납니다. 'Verify your identity' 버튼을 눌러 계속 진행하세요.",
      image: '/guide-images/guide-e-auth.webp',
    },
    {
      title: '④ 휴대폰으로 QR 코드 스캔',
      desc: '화면에 QR 코드가 표시됩니다. 스마트폰 카메라로 QR 코드를 스캔하세요. 모바일에서 본인 인증 절차가 진행됩니다. 화면 안내에 따라 인증을 완료하세요.',
      image: '/guide-images/guide-f-qr.webp',
    },
    {
      title: '⑤ 로그인 또는 회원가입',
      desc: '인증 완료 후 로그인 화면으로 이동합니다. Google, LINE, Apple 소셜 로그인이나 이메일로 로그인하세요.\n\n계정이 없다면 \'Sign up with Email\'을 탭하세요. 이메일 주소 입력 → 인증 코드 발송 → 코드 입력 → 비밀번호 설정 순서로 약 2분이면 완료됩니다.',
      tip: 'Alipay, 웨이보, Facebook 로그인은 더 이상 지원되지 않습니다.',
      image: '/guide-images/guide-c-login-opt.webp',
    },
    {
      title: '⑥ 티켓 종류 및 날짜 선택',
      desc: "로그인 후 다시 'Buy now'를 누르세요. 원하는 티켓을 선택하세요:\n• 1일권 → 날짜 선택: 7/31(금), 8/1(토), 8/2(일) 중 1일\n• 3일권 → 3일 전체 자동 포함",
    },
    {
      title: '⑦ 해외 카드로 결제',
      desc: 'Visa 또는 Mastercard 카드 정보를 입력하고 결제를 완료하세요.',
      warning: '글로벌 페이지에서는 국내 카드 결제가 불가합니다. KB국민카드 할인도 적용되지 않습니다.',
    },
    {
      title: '⑧ 모바일 티켓 저장',
      desc: "결제 완료 후 NOL World 앱 또는 웹사이트 'My Tickets'에서 QR 코드를 확인하세요.",
      warning: '현장은 데이터 트래픽이 몰려 티켓이 로딩되지 않을 수 있습니다. 입장 전에 반드시 미리 다운로드하세요.',
    },
    {
      title: '⑨ 입구에서 손목밴드로 교환',
      desc: '행사 당일 입구에서 QR 코드를 보여주면 손목밴드로 교환해 줍니다. 행사 내내 착용하세요 — 손목밴드는 재발급되지 않습니다.',
    },
  ],
}

const ja: GuideTranslation = {
  heading: 'ステップ別チケット購入ガイド',
  linkBtn: 'NOL Worldチケットページを開く',
  steps: [
    {
      title: '① NOL Worldチケットページにアクセス',
      desc: '上のボタンから公式グローバルチケットページを開いてください。サイトの言語が英語（English）に設定されているか確認してください。',
      image: '/guide-images/guide-a-poster-opt.webp',
    },
    {
      title: '② チケット料金を確認',
      desc: "Priceタブでチケット料金をご確認ください。\n\n• 3日券 — ₩240,000（7/31 – 8/2）\n• 1日券 — ₩120,000（好きな1日を選択）",
      image: '/guide-images/guide-b-price-opt.webp',
    },
    {
      title: "③ 'Buy now'をタップ → 本人確認",
      desc: "青い'Buy now'ボタンをタップします。「予約には本人認証が必要です」という画面が表示されます。'Verify your identity'をタップして続けてください。",
      image: '/guide-images/guide-e-auth.webp',
    },
    {
      title: '④ スマートフォンでQRコードをスキャン',
      desc: '画面にQRコードが表示されます。スマートフォンのカメラでQRコードをスキャンしてください。モバイル上で本人確認の手続きが始まります。画面の指示に従って認証を完了させてください。',
      image: '/guide-images/guide-f-qr.webp',
    },
    {
      title: '⑤ ログインまたはアカウント作成',
      desc: '認証完了後、ログイン画面に移動します。Google・LINE・Appleのソーシャルログイン、またはメールアドレスでログインできます。\n\nアカウントがない場合は「Sign up with Email」をタップ。メールアドレスを入力→認証コードを受け取る→コードを入力→パスワードを設定、で約2分で完了です。',
      tip: 'Alipay・Weibo・Facebookのログインは現在サポートされていません。',
      image: '/guide-images/guide-c-login-opt.webp',
    },
    {
      title: '⑥ チケットの種類と日程を選択',
      desc: "ログイン後、もう一度'Buy now'をタップします。\n• 1日券 → 日付を選択: 7/31(金)・8/1(土)・8/2(日)のいずれか1日\n• 3日券 → 3日間すべて自動で含まれます",
    },
    {
      title: '⑦ 海外発行カードで決済',
      desc: 'VisaまたはMastercardの情報を入力して決済を完了してください。',
      warning: 'このグローバルページでは韓国国内カードは使用できません。KB国民カード割引も適用されません。',
    },
    {
      title: '⑧ モバイルチケットを保存',
      desc: "決済完了後、NOL WorldアプリまたはウェブサイトのMy TicketsでQRコードを確認できます。",
      warning: '会場ではデータ通信が混雑してチケットが読み込めない場合があります。会場に到着する前に必ずダウンロードしておいてください。',
    },
    {
      title: '⑨ 入場ゲートでリストバンドと交換',
      desc: '当日、入場ゲートでQRコードを提示するとリストバンドと交換してもらえます。イベント中は必ず着用してください。リストバンドは再発行されません。',
    },
  ],
}

const zh: GuideTranslation = {
  heading: '分步购票指南',
  linkBtn: '打开NOL World购票页面',
  steps: [
    {
      title: '① 访问NOL World购票页面',
      desc: '点击上方按钮打开官方全球购票页面，请确认网站语言设置为英文（English）。',
      image: '/guide-images/guide-a-poster-opt.webp',
    },
    {
      title: '② 查看票价',
      desc: "请在Price栏查看票价信息。\n\n• 三日票 — ₩240,000（7/31 – 8/2）\n• 单日票 — ₩120,000（选择任意一天）",
      image: '/guide-images/guide-b-price-opt.webp',
    },
    {
      title: "③ 点击'Buy now' → 身份验证",
      desc: "点击蓝色'Buy now'按钮。页面会显示「进行预订需要完成身份验证」的提示。点击'Verify your identity'按钮继续。",
      image: '/guide-images/guide-e-auth.webp',
    },
    {
      title: '④ 用手机扫描QR码',
      desc: '屏幕上会出现一个QR码。用手机相机扫描该QR码，将在手机上进行身份验证流程。按照屏幕提示完成验证。',
      image: '/guide-images/guide-f-qr.webp',
    },
    {
      title: '⑤ 登录或注册账号',
      desc: '验证完成后，页面将跳转至登录界面。可使用Google、LINE、Apple账号登录，也可以用邮箱登录。\n\n没有账号？点击"Sign up with Email"，输入邮箱地址→收取验证码→输入验证码→设置密码，全程约2分钟完成。',
      tip: '目前不再支持支付宝、微博和Facebook登录。',
      image: '/guide-images/guide-c-login-opt.webp',
    },
    {
      title: '⑥ 选择票种和日期',
      desc: "登录后再次点击'Buy now'。选择您想要的票种：\n• 单日票 → 选择日期：7/31(周五)、8/1(周六)或8/2(周日)\n• 三日票 → 自动包含三天全程",
    },
    {
      title: '⑦ 使用海外银行卡付款',
      desc: '输入Visa或Mastercard卡片信息并完成付款。',
      warning: '全球购票页面不支持韩国国内银行卡。KB国民银行卡优惠也不适用于此页面。',
    },
    {
      title: '⑧ 保存电子票',
      desc: "付款完成后，可在NOL World应用或网站的'My Tickets'中查看您的QR码电子票。",
      warning: '请在到达会场前提前下载票务！现场网络拥挤，可能导致票务无法加载。',
    },
    {
      title: '⑨ 在入口处换取手环',
      desc: '活动当天在入口处出示QR码，工作人员将为您换上手环。请全程佩戴手环——手环丢失后不予补发。',
    },
  ],
}

export const guideTranslations: Record<Language, GuideTranslation> = { en, ko, ja, zh }
