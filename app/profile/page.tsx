"use client";

const TAGS = [
  { label: "Coffee",      bg: "color-mix(in srgb, var(--sc-wood) 55%, transparent)",         color: "#3a2a17",           rotate: "-2deg"   },
  { label: "AI",          bg: "color-mix(in srgb, var(--sc-forest) 92%, transparent)",        color: "var(--sc-cream)",   rotate: "1.5deg"  },
  { label: "Photography", bg: "color-mix(in srgb, var(--sc-wood) 55%, transparent)",          color: "#3a2a17",           rotate: "-1deg"   },
  { label: "Gaming",      bg: "var(--sc-cream-2)",                                             color: "var(--sc-fg-soft)", rotate: "2deg"    },
  { label: "Travel",      bg: "color-mix(in srgb, var(--sc-deep) 92%, transparent)",          color: "var(--sc-cream)",   rotate: "-1.5deg" },
];

export default function ProfilePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--sc-cream)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        fontFamily: "var(--font-mono), monospace",
      }}
    >
      {/* Card */}
      <div
        style={{
          width: 600,
          maxWidth: "100%",
          background: "var(--sc-cream)",
          backgroundImage:
            "radial-gradient(rgba(207,200,185,.55) 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          border: "1px solid var(--sc-line)",
          borderRadius: 6,
          boxShadow: "var(--shadow-soft)",
          padding: "46px 48px 52px",
          overflow: "hidden",
        }}
      >
        {/* Breadcrumb */}
        <div className="overline">Profile</div>

        {/* Polaroid photo */}
        <div
          style={{
            width: 210,
            margin: "22px auto 0",
            transform: "rotate(-3deg)",
            background: "var(--sc-paper)",
            padding: "12px 12px 42px",
            boxShadow: "var(--shadow-soft)",
            position: "relative",
            transition: "transform .3s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.transform = "rotate(-3deg)")
          }
        >
          {/* Masking tape */}
          <div
            style={{
              position: "absolute",
              top: -13,
              left: "50%",
              transform: "translateX(-50%) rotate(2deg)",
              width: 96,
              height: 26,
              background: "color-mix(in srgb, var(--sc-wood) 60%, transparent)",
              boxShadow: "0 1px 3px rgba(44,42,38,.1)",
            }}
          />
          {/* Photo */}
          <div style={{ aspectRatio: "1", overflow: "hidden" }}>
            <img
              src="/photo_me.png"
              alt="This is me"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </div>
          {/* Caption */}
          <div
            style={{
              textAlign: "center",
              fontFamily: "var(--font-hand), cursive",
              fontWeight: 600,
              fontSize: 22,
              lineHeight: 1,
              color: "var(--sc-fg-soft)",
              marginTop: 11,
            }}
          >
            This is me
          </div>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-hand), cursive",
            fontWeight: 700,
            fontSize: 54,
            letterSpacing: 0,
            color: "var(--sc-fg)",
            margin: "22px 0 0",
            lineHeight: 1.0,
          }}
        >
          Hi, I&apos;m{" "}
          <span style={{ color: "var(--sc-forest)" }}>Harry</span>
        </h1>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "var(--font-hand), cursive",
            fontWeight: 600,
            fontSize: 24,
            lineHeight: 1.1,
            color: "var(--sc-fg-mute)",
            marginTop: 6,
          }}
        >
          Systems engineer — officially a professional digital janitor
        </div>

        {/* Bio */}
        <p
          style={{
            fontFamily: "var(--font-hand), cursive",
            fontWeight: 600,
            fontSize: 24,
            lineHeight: 1.5,
            color: "var(--sc-fg-soft)",
            margin: "16px 0 0",
          }}
        >
          My life basically runs on code — more than half of it spent glued to
          this chair. Off the clock, I poke around the latest AI stuff. I shoot
          photos for fun, game when I can, and now and then suddenly teleport to
          Japan. This blog is where I log the adventures (and the rabbit holes).
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 11, marginTop: 24 }}>
          {TAGS.map((tag) => (
            <span
              key={tag.label}
              style={{
                fontFamily: "var(--font-hand), cursive",
                fontWeight: 700,
                fontSize: 20,
                lineHeight: 1,
                color: tag.color,
                background: tag.bg,
                padding: "5px 16px",
                transform: `rotate(${tag.rotate})`,
                boxShadow: "0 1px 3px rgba(44,42,38,.08)",
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 14,
            marginTop: 28,
            paddingTop: 22,
            borderTop: "1px dashed var(--sc-stone)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-hand), cursive",
              fontWeight: 600,
              fontSize: 22,
              lineHeight: 1,
              color: "var(--sc-fg-mute)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Find me{" "}
            <svg
              width="34"
              height="14"
              viewBox="0 0 34 14"
              fill="none"
              stroke="var(--sc-fg-mute)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 7.5 C 10 6, 20 8.5, 30 6.5" />
              <path d="M25 3 L31 6.4 L25.5 10.5" />
            </svg>
          </span>
          <a
            href="https://github.com/harry814104"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-hand), cursive",
              fontWeight: 600,
              fontSize: 26,
              lineHeight: 1,
              color: "var(--sc-forest)",
              textDecoration: "none",
              borderBottom: "1.5px dotted var(--sc-wood)",
              transition: "color .2s",
            }}
          >
            @egoistroyo
          </a>
        </div>
      </div>
    </div>
  );
}
