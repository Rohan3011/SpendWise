import { Container, Group, ActionIcon, rem } from "@mantine/core";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

export default function SiteFooter() {
  return (
    <div className="w-full p-6 mt-8 border-t bg-slate-50">
      <Container className="flex justify-between items-center">
        <div>
          <svg
            className="w-[40px] h-[40px]"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 300 300"
          >
            <path
              fill="#CBD5E1"
              d="M24.2 33.67H70.53V61.07H24.2z"
              transform="rotate(-45 47.37 47.368)"
            ></path>
            <path
              fill="#CBD5E1"
              d="M232.19 241.66H278.52V269.06H232.19z"
              transform="rotate(-45 255.362 255.356)"
            ></path>
            <path
              fill="#426ac6"
              d="M9.58 67.17H151.14000000000001V94.57H9.58z"
              transform="rotate(-45 80.36 80.874)"
            ></path>
            <path
              fill="#426ac6"
              d="M148.59 206.18H290.15V233.58H148.59z"
              transform="rotate(-45 219.37 219.884)"
            ></path>
            <path
              fill="#304065"
              d="M-8.81 101.42H239.07V128.82H-8.81z"
              transform="rotate(-45 115.13 115.132)"
            ></path>
            <path
              fill="#304065"
              d="M60.93 171.17H308.81V198.57H60.93z"
              transform="rotate(-45 184.868 184.875)"
            ></path>
            <path
              fill="#3b82f6"
              d="M-9.95 135.73H308.81V163.13H-9.95z"
              transform="rotate(-45 149.428 149.435)"
            ></path>
          </svg>
        </div>
        <div className="text-slate-500">
          Built by{" "}
          <a
            target="_blank"
            href="https://github.com/Rohan3011"
            className="text-slate-700 font-semibold underline"
          >
            Rohan Kamble
          </a>
        </div>
        <Group spacing={0} className="" position="right" noWrap>
          <ActionIcon
            size="xl"
            component="a"
            target="_blank"
            href="https://github.com/Rohan3011/SpendWise"
          >
            <AiFillGithub size="2rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="xl"
            component="a"
            target="_blank"
            href="https://twitter.com/_rohankamble"
          >
            <AiFillTwitterCircle size="2rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
