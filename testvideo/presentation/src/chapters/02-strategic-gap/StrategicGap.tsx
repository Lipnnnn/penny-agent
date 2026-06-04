import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./StrategicGap.css";

/**
 * Chapter 2: 战略差距
 * 4 steps — 金句 → 行动 → 转化 → CTA
 */
export default function StrategicGap({ step }: ChapterStepProps) {
    /* Step 0 — 金句定格：战术勤奋 vs 战略懒惰 */
    if (step === 0) {
        return (
            <div className="sg-scene scene-pad">
                <div className="sg-quote-wrap">
                    <div className="sg-quote-kicker label-mono">
                        <span className="dot-accent" /> &nbsp;一句话
                    </div>
                    <div className="pull-quote sg-quote-main">
                        <MaskReveal show duration={800}>
                            <span className="serif-cn">不要用</span>
                        </MaskReveal>
                        <MaskReveal show delay={300} duration={800}>
                            <span className="display-en" style={{ color: "var(--text-mute)" }}>战术上的勤奋</span>
                        </MaskReveal>
                        <MaskReveal show delay={650} duration={800}>
                            <span className="serif-cn">去掩盖</span>
                        </MaskReveal>
                        <MaskReveal show delay={950} duration={800}>
                            <span className="display-en" style={{ color: "var(--accent)" }}>战略上的懒惰</span>
                        </MaskReveal>
                    </div>
                    {/* 对比标注条 */}
                    <div className="sg-vs-bar">
                        <span className="sg-vs-label sg-vs-tactic">战术勤奋</span>
                        <span className="sg-vs-arrow">→</span>
                        <span className="sg-vs-label sg-vs-strategy">战略懒惰</span>
                    </div>
                </div>
            </div>
        );
    }

    /* Step 1 — 行动指令：30分钟空白期 + 三个否定 */
    if (step === 1) {
        return (
            <div className="sg-scene scene-pad">
                <div className="sg-action">
                    {/* 大数字：30 分钟 */}
                    <div className="sg-time-hero">
                        <span className="hero-num sg-time-num">30</span>
                        <span className="sg-time-unit label-mono">分钟 / 天</span>
                    </div>

                    <hr className="rule" style={{ margin: "0" }} />

                    {/* 三个否定动作 — 逐条揭示 */}
                    <div className="sg-neg-list">
                        <div className="sg-neg-item card">
                            <div className="sg-neg-mark">✕</div>
                            <div className="sg-neg-text">不看手机</div>
                        </div>
                        <div className="sg-neg-item card">
                            <div className="sg-neg-mark">✕</div>
                            <div className="sg-neg-text">不回消息</div>
                        </div>
                        <div className="sg-neg-item card sg-neg-positive">
                            <div className="sg-neg-mark" style={{ color: "var(--accent)" }}>✓</div>
                            <div className="sg-neg-text">复盘和思考</div>
                        </div>
                    </div>

                    <div className="sg-action-tag label-mono">
                        绝对空白期
                    </div>
                </div>
            </div>
        );
    }

    /* Step 2 — 转化叙事：碎片化→深度成长 + 掌控注意力→开挂 */
    if (step === 2) {
        return (
            <div className="sg-scene scene-pad">
                <div className="sg-transform">
                    {/* 转化链：碎片化 → 深度成长 */}
                    <div className="sg-chain">
                        <div className="sg-chain-node sg-chain-from">
                            <div className="sg-chain-label label-mono">碎片化时间</div>
                        </div>
                        <div className="sg-chain-arrow">
                            <svg width="60" height="24" viewBox="0 0 60 24">
                                <line x1="0" y1="12" x2="50" y2="12" stroke="var(--accent)" strokeWidth="4" />
                                <polygon points="60,12 48,4 48,20" fill="var(--accent)" className="sg-arrow-tip" />
                            </svg>
                        </div>
                        <div className="sg-chain-node sg-chain-to">
                            <div className="sg-chain-label label-mono">深度成长阶梯</div>
                        </div>
                    </div>

                    {/* 注意力对比 */}
                    <div className="sg-attention">
                        <div className="sg-att-item sg-att-passive">
                            <div className="sg-att-label">被算法推着走</div>
                            {/* 流动粒子线 — 被"推"的感觉 */}
                            <svg className="sg-att-wave" viewBox="0 0 300 60" width="300" height="60">
                                <path
                                    d="M0,30 Q50,10 100,30 Q150,50 200,30 Q250,10 300,30"
                                    fill="none"
                                    stroke="var(--text-faint)"
                                    strokeWidth="2"
                                    strokeDasharray="6 4"
                                    className="sg-wave-path"
                                />
                            </svg>
                        </div>
                        <div className="sg-att-vs label-mono">VS</div>
                        <div className="sg-att-item sg-att-active">
                            <div className="sg-att-label">掌控注意力</div>
                            {/* 稳定直线 — 掌控感 */}
                            <svg className="sg-att-line" viewBox="0 0 300 60" width="300" height="60">
                                <line
                                    x1="0" y1="30" x2="300" y2="30"
                                    stroke="var(--accent)"
                                    strokeWidth="4"
                                    className="sg-solid-line"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* 开挂状态 */}
                    <div className="sg-hack-state">
                        <span className="display-en" style={{ fontSize: "80px", color: "var(--accent)" }}>
                            开挂
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    /* Step 3 — CTA */
    return (
        <div className="sg-scene scene-pad sg-cta-scene">
            <div className="sg-cta">
                <div className="sg-cta-label label-mono">如果听懂了</div>
                <div className="sg-cta-main">
                    <MaskReveal show duration={600}>
                        <span className="serif-cn" style={{ fontSize: "72px" }}>点个赞</span>
                    </MaskReveal>
                </div>
                <div className="sg-cta-sub" style={{ fontSize: "28px", color: "var(--text-mute)" }}>
                    评论区见
                </div>
            </div>
        </div>
    );
}
