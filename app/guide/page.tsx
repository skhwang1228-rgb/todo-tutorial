import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "사용법 안내",
}

const STEPS: { title: string; description: string }[] = [
  {
    title: "할 일 추가",
    description:
      "입력창에 내용을 쓰고 Enter를 누르면 목록에 추가됩니다. 빈 내용은 추가되지 않습니다.",
  },
  {
    title: "완료 표시",
    description:
      "항목 왼쪽의 체크박스를 누르면 완료 처리되고, 다시 누르면 진행중으로 돌아갑니다.",
  },
  {
    title: "내용 수정",
    description:
      "항목의 글자를 더블클릭하면 수정할 수 있습니다. Enter로 저장하고 Esc로 취소합니다.",
  },
  {
    title: "삭제",
    description: "항목 오른쪽의 휴지통 버튼을 누르면 해당 항목이 삭제됩니다.",
  },
  {
    title: "필터",
    description:
      "전체 / 진행중 / 완료 탭으로 보고 싶은 항목만 골라 볼 수 있습니다.",
  },
  {
    title: "완료한 일 지우기",
    description:
      "완료된 항목이 있으면 목록 아래에 버튼이 나타나며, 한 번에 모두 지울 수 있습니다.",
  },
  {
    title: "저장",
    description:
      "할 일은 이 브라우저(localStorage)에 저장됩니다. 다른 브라우저나 기기와는 공유되지 않습니다.",
  },
]

export default function GuidePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">사용법 안내</h1>
      <ol className="flex flex-col gap-4">
        {STEPS.map(({ title, description }, i) => (
          <li key={title} className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
              {i + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link
        href="/"
        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        ← 할 일 목록으로 돌아가기
      </Link>
    </main>
  )
}
