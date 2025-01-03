"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        <div className="flex flex-col gap-2">
          <p>我是一个热爱运动，喜欢阅读和分享，脑子里总有产生一些奇思妙想的人。</p>
          <p>我的理想是有一家自己的公司和我主导开发的产品。为此我不得不出卖自己的手指，靠努力敲代码赚钱吃饭，并在吃饱了撑的时候积极筹备这件事。</p>
          <p>从2020年毕业至今，我经历了四家公司，从重庆来到深圳。在这段时间里我从一个小白逐渐融入到的社会和工作中。
          我喜欢阅读书籍并试图带入书中人物，揣摩他们的想法。并和不同年龄段的人交流我的心得。意外的是这让我交到了一些比我年长几十岁的朋友😂。</p>
          <p>目前我在为银行工作。在项目组中担任前端开发并负责部分产品建设。日常会负责一些项目的搭建，需求排期工作分配和部分代码编写。也会和
          业务交流沟通，砍掉一些不合理的需求...也会思维发散，和一线人员积极交流产品，将产品持续的迭代和优化。</p>
          <p>开发，管理和产品的工作糅杂在一起，时常让我心力憔悴，但这也让我收获了很多。正是有了这些生活和工作的经验，让我大部分时间都充满干劲（或是郁闷-.-）。</p>
        </div>
      ) : (
        <>
          <p className="mb-3">
          I&#39;m someone who loves sports, enjoys reading and sharing, and always comes up with creative ideas.
          </p>
          <p className="mb-3">
          My dream is to have my own company and products that I lead the development of. To achieve this, I have to &quot;sell&quot; my fingers, tirelessly typing code to make a living. When I’m not busy surviving, I actively prepare for making this dream a reality.
          </p>

          <p className="mb-3">
          Since graduating in 2020, I&#39;ve worked at four companies and moved from Chongqing to Shenzhen. During this time, I gradually transitioned from a beginner to becoming more integrated into society and my work.
          I enjoy reading books and trying to step into the shoes of the characters, exploring their thoughts. I also like sharing my insights with people of different ages. Surprisingly, this has led me to make friends with people decades older than me. 😂
          </p>
          <p className="mb-3">
          Here&#39;s the translation:
          Currently, I work at a bank as a frontend developer, responsible for part of the product development. My daily tasks include setting up projects, scheduling tasks, work allocation, and writing some code. I also communicate with the business side, cutting down unreasonable requests, and brainstorm ideas by actively discussing with front-line staff to continuously iterate and optimize the product.
          </p>
          <p className="mb-3">
          Juggling development, management, and product responsibilities often leaves me mentally and physically exhausted, but it has also taught me a lot. These experiences in life and work keep me motivated most of the time (or sometimes frustrated -.-).
          </p>
        </>
      )}
    </motion.section>
  )
}
