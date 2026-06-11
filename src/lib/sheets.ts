// ─── Google Apps Script 웹 앱 URL ───────────────────────────────────────────
// 아래 WEBHOOK_URL에 배포 후 받은 URL을 붙여넣으세요.
// 설정 전까지는 제출 버튼이 작동하되 구글 시트에는 저장되지 않습니다.
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwjGbFONdnAzhdLlomvtdX52T7LSjxERY3mDS1g5aquUMFk1YNx4dmZLclMEY5dqsCs/exec'
export interface SurveyPayload {
  ts: number
  lang: string
  country: string
  rating: number
  helpful: 'yes' | 'no'
  wantMore: string
  improvement: string
}

export async function submitSurveyToSheets(payload: SurveyPayload): Promise<void> {
  if (!WEBHOOK_URL) return
  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors', // Apps Script는 no-cors로 항상 전송 가능
      body: JSON.stringify(payload),
    })
  } catch {
    // 네트워크 오류 시 조용히 무시 — 피드백 제출 UI는 정상 완료 처리
  }
}


