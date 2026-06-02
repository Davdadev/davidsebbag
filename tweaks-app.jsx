/* ============================================================
   tweaks-app.jsx — overall-look explorer
   Renders only the Tweaks panel; applies values to the
   vanilla site via CSS variables + data-attributes on <html>.
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  "accent": "#7ac2c8",
  "bg": "ink",
  "motif": "cube",
  "motion": "calm",
  "heading": "display"
} /*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const root = document.documentElement;

  React.useEffect(() => { root.style.setProperty("--accent", t.accent); }, [t.accent]);
  React.useEffect(() => { root.dataset.bg = t.bg; }, [t.bg]);
  React.useEffect(() => { root.dataset.motif = t.motif; }, [t.motif]);
  React.useEffect(() => { root.dataset.motion = t.motion; }, [t.motion]);
  React.useEffect(() => { root.dataset.heading = t.heading; }, [t.heading]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Palette" />
      <TweakColor
        label="Accent"
        value={t.accent}
        options={["#7ac2c8", "#7ac8a6", "#9aa6d6", "#cdba8e"]}
        onChange={(v) => setTweak("accent", v)}
      />
      <TweakRadio
        label="Background"
        value={t.bg}
        options={[{ value: "ink", label: "Ink" }, { value: "charcoal", label: "Coal" }, { value: "abyss", label: "Abyss" }]}
        onChange={(v) => setTweak("bg", v)}
      />

      <TweakSection label="Hero motif" />
      <TweakSelect
        label="Shape"
        value={t.motif}
        options={[
          { value: "cube", label: "Glass cube" },
          { value: "wire", label: "Wireframe cube" },
          { value: "glasses", label: "Glasses mark" },
          { value: "none", label: "None (type only)" },
        ]}
        onChange={(v) => setTweak("motif", v)}
      />
      <TweakRadio
        label="Motion"
        value={t.motion}
        options={[{ value: "calm", label: "Calm" }, { value: "lively", label: "Lively" }]}
        onChange={(v) => setTweak("motion", v)}
      />

      <TweakSection label="Type" />
      <TweakRadio
        label="Headings"
        value={t.heading}
        options={[{ value: "display", label: "Boldonse" }, { value: "grotesk", label: "Grotesk" }]}
        onChange={(v) => setTweak("heading", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<TweaksApp />);
