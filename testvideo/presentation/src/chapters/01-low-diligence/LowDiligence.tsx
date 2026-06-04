import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./LowDiligence.css";

/**
 * Chapter 1: 低水平勤奋
 * 3 steps — hook → 现象 → 问题定性
 */
export default function LowDiligence({ step }: ChapterStepProps) {
    /* Step 0 — 全屏钩子："低水平勤奋"死循环 */
    if (step === 0) {
        return (
            <div className="ld-scene scene-pad">
                <div className="ld-hook">
                    {/* 旋转死循环 SVG — 内容驱动：视觉上演"循环往复" */}
                    <svg
                        className="ld-loop-svg"
                        viewBox="0 0 400 400"
                        width="400"
                        height="400"
                    >
                        <circle
                            className="ld-loop-ring"
                            cx="200"
                            cy="200"
                            r="160"
                            fill="none"
                            stroke="var(--accent)"
                            strokeWidth="4"
                            strokeDasharray="80 40"
                        />
                        <circle
                            className="ld-loop-ring ld-loop-ring-inner"
                            cx="200"
                            cy="200"
                            r="100"
                            fill="none"
                            stroke="var(--rule)"
                            strokeWidth="4"
                            strokeDasharray="50 30"
                        />
                        {/* 箭头标记方向 */}
                        <polygon
                            className="ld-loop-arrow"
                            points="360,200 340,180 340,220"
                            fill="var(--accent)"
                        />
                    </svg>

                    <div className="ld-hook-text">
                        <div className="ld-hook-kicker label-mono">
                            <span className="dot-accent" /> &nbsp;死循环
                        </div>
                        <h1 className="ld-hook-h">
                            <MaskReveal show duration={700}>
                                <span className="display-en">低水平</span>
                            </MaskReveal>
                            <MaskReveal show delay={350} duration={700}>
                                <span className="display-en" style={{ color: "var(--accent)" }}>勤奋</span>
                            </MaskReveal>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }

    /* Step 1 — 现象描绘：陀螺意象 + 三项列举 */
    if (step === 1) {
        return (
            <div className="ld-scene scene-pad">
                <div className="ld-phenom">
                    {/* 左侧：旋转陀螺 SVG */}
                    <div className="ld-top-wrap">
                        <svg
                            className="ld-top-svg"
                            viewBox="0 0 200 240"
                            width="200"
                            height="240"
                        >
                            {/* 陀螺体 */}
                            <polygon
                                className="ld-top-body"
                                points="100,20 160,180 40,180"
                                fill="var(--surface-2)"
                                stroke="var(--rule)"
                                strokeWidth="4"
                            />
                            {/* 陀螺轴 */}
                            <line
                                x1="100"
                                y1="20"
                                x2="100"
                                y2="0"
                                stroke="var(--rule)"
                                strokeWidth="4"
                            />
                            {/* 陀螺尖 */}
                            <circle cx="100" cy="185" r="4" fill="var(--accent)" />
                            {/* 旋转轨迹弧线 */}
                            <ellipse
                                className="ld-top-trail"
                                cx="100"
                                cy="210"
                                rx="60"
                                ry="8"
                                fill="none"
                                stroke="var(--text-faint)"
                                strokeWidth="2"
                                strokeDasharray="8 6"
                            />
                        </svg>
                        <div className="ld-top-label label-mono">原地打转</div>
                    </div>

                    {/* 右侧：三项列举卡片 */}
                    <div className="ld-items">
                        <div className="ld-item card">
                            <div className="ld-item-num hero-num">01</div>
                            <div className="ld-item-text">
                                <div className="ld-item-title">刷成功学</div>
                                <div className="ld-item-sub label-mono">别人的人生</div>
                            </div>
                        </div>
                        <div className="ld-item card">
                            <div className="ld-item-num hero-num">02</div>
                            <div className="ld-item-text">
                                <div className="ld-item-title">收藏干货</div>
                                <div className="ld-item-sub label-mono">永远不看</div>
                            </div>
                        </div>
                        <div className="ld-item card">
                            <div className="ld-item-num hero-num">03</div>
                            <div className="ld-item-text">
                                <div className="ld-item-title">一年过去</div>
                                <div className="ld-item-sub label-mono">原地打转</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* Step 2 — 问题定性：差距不在加班，在没跳出怪圈 */
    return (
        <div className="ld-scene scene-pad">
            <div className="ld-insight">
                {/* 左侧：被划掉的"努力"指标 */}
                <div className="ld-effort-zone">
                    <div className="ld-effort-item ld-effort-cross">
                        <span className="display-en">加班</span>
                    </div>
                    <div className="ld-effort-item ld-effort-cross">
                        <span className="display-en">熬夜</span>
                    </div>
                    <div className="ld-effort-label label-mono">不是这些</div>
                </div>

                {/* 中间分割线 */}
                <div className="ld-insight-divider">
                    <hr className="rule" />
                </div>

                {/* 右侧：怪圈 + 矛盾标签 */}
                <div className="ld-trap-zone">
                    {/* 怪圈 SVG — 圆环困住关键词 */}
                    <svg
                        className="ld-trap-svg"
                        viewBox="0 0 300 300"
                        width="300"
                        height="300"
                    >
                        <circle
                            cx="150"
                            cy="150"
                            r="130"
                            fill="none"
                            stroke="var(--rule)"
                            strokeWidth="4"
                            strokeDasharray="20 10"
                        />
                        <circle
                            cx="150"
                            cy="150"
                            r="90"
                            fill="var(--accent-soft)"
                            stroke="var(--accent)"
                            strokeWidth="3"
                        />
                        <text
                            x="150"
                            y="145"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="ld-trap-text"
                            fill="var(--accent)"
                            fontFamily="var(--font-display-en)"
                            fontSize="28"
                            fontWeight="900"
                        >
                            怪圈
                        </text>
                    </svg>
                    <div className="ld-tension-tags">
                        <span className="ld-tension-tag ld-tension-left">舒适</span>
                        <span className="ld-tension-vs">VS</span>
                        <span className="ld-tension-tag ld-tension-right">焦虑</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
