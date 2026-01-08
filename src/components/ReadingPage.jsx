import { useState, useEffect } from 'react';
import './ReadingPage.css';

const ReadingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="reading-container">
      <div className={`reading-content ${isVisible ? 'visible' : ''}`}>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="celestial-ornament">✦</div>
          <h1 className="main-title">
            A Birthday Transit Reading
          </h1>
          <p className="subtitle">Turning 64 Under Profound Skies</p>
          <div className="hero-divider"></div>
        </section>

        {/* Foundation Card */}
        <section className="transit-card">
          <h2 className="section-title">The Signatures You Carry</h2>
          <p className="section-subtitle">Before We Look at the Transits</p>
          <div className="section-content">
            <p>
              Seems like a wonderful moment to be alive in a body, in a chart like yours. You carry tremendous Capricorn energy (Sun, Mercury, Jupiter, Saturn, and the Ascendant all in the sign of the mountain goat). You have spent a lifetime <em>building</em>: building structures, building character, building through endurance. Your Sun conjunct the Ascendant makes identity and self-expression inseparable; you <em>are</em> what you present, and what you present is what you are. There's an authenticity here that can feel both like a gift and a weight.
            </p>
            <p>
              But there's another signature in your chart that I want to name before we dive into the transits: <strong>Neptune sits at your Midheaven in Scorpio.</strong> This means you've always known Neptune's energy: the dissolving, the dreaming, the longing for something beyond the material. In your public life, in your work, you've channeled this. You understand how to transform raw ingredients into something that transcends the sum of its parts. You know that the best creations come from a place of devotion, not just technique. You are, in a sense, already a Neptune king. This matters for what I'm about to say about the transits you're in.
            </p>
            <p>
              And then there's this: <strong>Venus in Pisces conjunct Chiron, opposing Pluto conjunct the North Node in Virgo.</strong> This is the signature of an artist-healer whose creative gifts are tied directly to soul purpose. Venus in Pisces creates from love, from beauty, from a kind of sacred tenderness. Conjunct Chiron, there's a wound woven into that creativity: perhaps a sense that what you create is never quite understood, or that your most heartfelt offerings don't always land the way you hope. But opposing Pluto and the North Node in Virgo, this wound is <em>the path</em>. Your destiny involves bringing your Piscean gifts into practical, tangible form, transforming the ephemeral into something real. Something that can be tasted, touched, shared.
            </p>
            <p className="transition-text">Now let's look at what the heavens are saying to you right now.</p>
          </div>
        </section>

        <div className="section-divider">
          <span className="divider-ornament">✦ ✦ ✦</span>
        </div>

        {/* Section 1: Pluto Passage */}
        <section className="transit-card card-alternate">
          <h2 className="section-title">The Pluto Passage</h2>
          <p className="section-subtitle">What You've Already Walked Through</p>
          <div className="section-content">
            <p>
              You've just completed your Pluto trine natal Moon. Your Moon at 0° Libra sits in a delicate position: the very first degree of the sign of relationship, balance, and the Other. With Pluto in early Aquarius forming that trine (now separating), you've likely been through a deep emotional restructuring over the past months. Trines from Pluto don't force the door open the way squares and oppositions do. Instead, they <em>invite</em> transformation. They whisper, "You can let this go now. You can let yourself become something else."
            </p>
            <p>
              For someone with your Capricorn stellium and a Libra Moon, emotional expression doesn't always come easily. The Moon in Libra wants harmony, wants to accommodate, wants to keep the peace. But Pluto's trine may have shown you that <em>real</em> peace sometimes requires letting certain emotional patterns die. This could have involved relationships, family dynamics, or your own internal dialogue about what you "should" feel versus what you actually feel.
            </p>
            <div className="pull-quote">
              <p>You come into 64 having done some of that alchemical work already. That's important context for everything else.</p>
            </div>
          </div>
        </section>

        <div className="section-divider">
          <span className="divider-ornament">✦</span>
        </div>

        {/* Section 2: Eclipse */}
        <section className="transit-card">
          <h2 className="section-title">The Eclipse Approaching</h2>
          <p className="section-subtitle">The Second House Cusp and Natal Chiron</p>
          <div className="section-content">
            <p>This stood out to me.</p>
            <p>
              With the upcoming eclipse activating your 2nd house cusp at 26° Aquarius and your natal Chiron at 29° Aquarius, we're looking at something significant around <em>worth, value, resources, and the wound of belonging</em>.
            </p>
            <p>
              Chiron in Aquarius speaks to a wound around being different: feeling like an outsider, like one's gifts are too strange or too ahead of their time to be received. It can also relate to wounds around group belonging, friendship, or the question of whether one's contributions to the collective are truly valued. In the 2nd house, this wound becomes tied to material security and self-worth: <em>Am I valued for what I bring? Do my gifts translate into sustenance? Do I belong in this economy, in this society, in this world?</em>
            </p>
            <p>
              The eclipse activating this point is an invitation (and possibly a requirement) to face these questions directly. Eclipses don't ask politely. They illuminate and obscure simultaneously, revealing what has been hidden while also asking us to release something we thought we needed.
            </p>
            <p>
              And here's the twist: your natal Chiron opposes your natal Uranus in Leo, which sits right at the cusp of your 7th and 8th houses. With Uranus at 25° Leo and the 8th house cusp at 26°, this opposition stretches across the axis of self-worth and partnership (the 2nd and 7th houses). Uranus in Leo in the 7th speaks to a need for freedom and authenticity in relationships, a capacity to surprise and be surprised by partners, and perhaps a pattern of attracting unusual or liberating partnerships. The wound (Chiron) around belonging and being valued is in direct conversation with your relationship life: how you show up with others, how you are received, how partnership either heals or triggers your deepest insecurities about worth.
            </p>
            <div className="pull-quote">
              <p>The eclipse is saying: It's time to look at this. It's time to feel what you've been carrying about your worth and your difference, especially as it plays out in partnership. And it's time to let some of that old story go.</p>
            </div>
          </div>
        </section>

        <div className="section-divider">
          <span className="divider-ornament">✦</span>
        </div>

        {/* Section 3: Neptune */}
        <section className="transit-card card-alternate">
          <h2 className="section-title">Neptune Opposite the Natal Moon</h2>
          <p className="section-subtitle">The Fog and the Longing</p>
          <div className="section-content">
            <p>
              Transiting Neptune at 29° Pisces opposing your Moon at 0° Libra from the 2nd house: this is tender territory.
            </p>
            <p>
              Neptune oppositions to the Moon can feel like walking through mist. Boundaries between self and other become porous. Old longings surface. Relationships may feel confusing, idealized, or disappointing. There can be a sense of emotional overwhelm, or conversely, a kind of beautiful dissolution of the ego's defenses.
            </p>
            <p>
              From the 2nd house, Neptune's fog touches matters of money, possessions, and self-worth. You may be in a period where financial matters feel unclear, where you're being asked to release attachment to material security as the <em>basis</em> of your sense of safety. This doesn't mean losing everything. It means finding a different ground to stand on. Neptune always asks: <em>Can you trust something you can't see or measure?</em>
            </p>
            <div className="pull-quote">
              <p>But here's what I want to name: <strong>you already know Neptune</strong>. With Neptune at your Midheaven, you've spent your career working with Neptune's energy: the artistry, the devotion, the transformation of the mundane into the sacred.</p>
            </div>
            <p>
              This transit isn't introducing you to unfamiliar territory. It's asking you to apply what you've always known professionally to a more personal realm: your emotional foundation, your sense of security, your relationship with the material world.
            </p>
            <p>
              I see this transit reflected in the transitions you're navigating: properties that didn't come through as expected, the sense of not quite landing where you thought you would, the uncertainty about what stays and what goes. Neptune dissolves our attachments to specific outcomes so that something more aligned can emerge. It's not comfortable, but you've worked with this energy your whole life. You know how to let go and trust the process.
            </p>
            <p>
              With your Moon in Libra conjunct the Part of Fortune, your greatest fortune comes through relationship, through partnership, through beauty and balance. Neptune opposing this point may be temporarily dissolving your usual ways of finding equilibrium, but it's doing so in order to reveal a deeper source of peace that doesn't depend on external harmony.
            </p>
            <p>
              This transit is in the late degrees, so you've been feeling it for a while now. It's wrapping up, but these final degrees of Neptune transits often bring the most poignant experiences. Be gentle with yourself. Allow confusion without forcing resolution. Notice what dreams or spiritual experiences come through during this time.
            </p>
          </div>
        </section>

        <div className="section-divider">
          <span className="divider-ornament">✦</span>
        </div>

        {/* Section 4: Uranus */}
        <section className="transit-card">
          <h2 className="section-title">Uranus Square Natal Chiron</h2>
          <p className="section-subtitle">The Lightning and the Wound</p>
          <div className="section-content">
            <p>
              Transiting Uranus at 27° Taurus in your 4th house square your natal Chiron at 29° Aquarius: this is activating the same wound we discussed, but from a different angle.
            </p>
            <p>
              If the eclipse is illuminating the Chiron wound around worth and belonging, Uranus is <em>disrupting</em> it. Uranus squares don't allow things to stay as they are. From the 4th house, this disruption touches home, roots, family, ancestry, and the private inner foundation of the self.
            </p>
            <p>
              I notice you're in a time of significant housing transitions: remodeling, reconfiguring, reimagining what "home" means and where it is. This is Uranus in the 4th house. It shakes the foundations not to destroy them but to show you what's truly stable and what was only habit. The square to Chiron means this process is touching something tender: questions about where you belong, whether your foundation is secure, whether you can trust the ground beneath you.
            </p>
            <div className="pull-quote">
              <p>But here's the gift of Uranus: it frees. The square to Chiron can feel painful because it's destabilizing an already-tender place. But Uranus doesn't destabilize in order to destroy; it destabilizes in order to <em>liberate</em>.</p>
            </div>
            <p>
              The question becomes: <em>What have you been protecting that no longer needs protection? What wound have you been managing that could actually be released?</em>
            </p>
            <p>
              With Uranus, the breakthrough often comes suddenly. You may have an insight, an experience, or an encounter that shifts everything. The key is to stay curious rather than defended.
            </p>
          </div>
        </section>

        <div className="section-divider">
          <span className="divider-ornament">✦</span>
        </div>

        {/* Section 5: Chiron */}
        <section className="transit-card card-alternate">
          <h2 className="section-title">Chiron Square Natal Saturn</h2>
          <p className="section-subtitle">The Final Chapter of a Longer Story</p>
          <div className="section-content">
            <p>
              I noticed that transiting Chiron at 22° Aries has already squared your Jupiter, Sun, Mercury, and Ascendant as it moved through earlier degrees of Aries. Now it's squaring your Saturn at 20° Capricorn.
            </p>
            <p>This is the culmination of a multi-year process.</p>
            <div className="pull-quote">
              <p>Chiron squaring your Capricorn stellium has been asking: Where are you wounded in your sense of identity, authority, ambition, and structure? Where do you feel inadequate despite all you've accomplished? Where does the inner critic still have power?</p>
            </div>
            <p>The square to Saturn is the final exam.</p>
            <p>
              Saturn in Capricorn in the 1st house is formidable. This is someone who has taken on tremendous responsibility, who has worked harder than most, who has built and achieved and endured. But Saturn's shadow is the fear that it will never be enough: that no matter how much you do, you still haven't earned your place.
            </p>
            <p>
              Chiron squaring this placement is asking you to confront that fear directly. Not to overcome it through more effort, but to <em>heal</em> it. To recognize that the wound isn't a problem to be solved through achievement; it's a tender place that simply needs compassion.
            </p>
            <p>
              I see this reflected in the transition you're navigating with your restaurants. You've built something substantial. And now you're contemplating letting that part of your life work go, making space for what the soul is calling toward. The creation of Amaro feels significant here. This isn't building an empire; this is pouring love and craft into something refined, personal, singular. It's Venus in Pisces conjunct Chiron finding its expression: <em>the wound becomes the gift</em>. The artistry that knows loss, that knows longing, that knows what it means to offer something precious without knowing if it will be received: that's what makes the creation real.
            </p>
            <p>
              At 64, having already experienced Chiron's square to your Sun, Jupiter, Mercury, and Ascendant, you've been doing this work. The Saturn square is the completion of the process. It's as if Chiron is saying: <em>You've looked at how your woundedness affects your identity, your optimism, your mind, and your self-presentation. Now look at how it affects your relationship with time, discipline, authority, and what you owe.</em>
            </p>
            <p>
              Saturn is also the planet of aging, of mortality, of reckoning with limits. A Chiron-Saturn square at 64 can bring up questions about legacy, about what you're leaving behind, about whether you've lived up to your own standards. These are not easy questions, but they are important ones. And the fact that you've already been through the earlier squares means you're not coming to this unprepared.
            </p>
          </div>
        </section>

        <div className="section-divider">
          <span className="divider-ornament">✦ ✦ ✦</span>
        </div>

        {/* Synthesis Section */}
        <section className="synthesis-section">
          <h2 className="synthesis-title">Synthesis</h2>
          <p className="synthesis-subtitle">What This Birthday Holds</p>
          <div className="synthesis-content">
            <p>You're standing at a significant threshold.</p>
            <p>The <strong>Pluto trine</strong> has done its preparatory emotional work, softening old patterns.</p>
            <p>The <strong>eclipse</strong> is calling you to examine your deepest beliefs about your worth and your difference: to see the wound and to allow it to be touched by larger forces.</p>
            <p><strong>Neptune</strong> is dissolving your usual emotional anchors, inviting you into trust and surrender, particularly around material security and relationships. But this is Neptune you already know: the Neptune that has guided your creative life. Now it's asking you to trust that same dissolution in more personal territory.</p>
            <p><strong>Uranus</strong> is shaking the foundations of your inner home, liberating you from protections you no longer need. The housing transitions, the uncertainty about where "home" is: this is the outer reflection of an inner reconfiguration.</p>
            <p><strong>Chiron</strong> is completing its passage through your identity houses, asking you to hold your Saturn (your inner taskmaster, your sense of duty) with compassion rather than judgment.</p>
            <p>
              And through it all, your <strong>Venus-Chiron conjunction opposing Pluto and the North Node</strong> reminds you that your path has always been about bringing wounded beauty into tangible form. The liqueur you're crafting with such care isn't separate from this moment; it <em>is</em> this moment. It's the soul saying: <em>This is what I make when I'm no longer trying to prove anything. This is what I create when I'm simply offering what I love.</em>
            </p>
            <p>
              All of this is happening in a chart that has tremendous structural strength. You were built for this. The Capricorn stellium, the Saturn in the 1st house, the Sun on the Ascendant: these give you the capacity to meet difficulty with dignity. But this moment isn't about strength. It's about tenderness.
            </p>
            <div className="pull-quote synthesis-quote">
              <p>At 64, the soul's work shifts. The first half of life is often about building; the second half is about meaning. These transits are inviting you (maybe insisting) that you turn inward and ask not "What more can I build?" but "What can I finally release? What have I been carrying that was never mine to carry? What would it feel like to be enough, exactly as I am?"</p>
            </div>
            <p>
              If you can meet these transits with openness rather than resistance, with curiosity rather than fear, with compassion for yourself rather than your usual demanding standards: this could be one of the most liberating years of your life.
            </p>
            <p className="final-blessing">
              Happy birthday. The stars aren't done with you yet. But they're no longer asking you to climb. They're asking you to rest, to release, and to receive.
            </p>
          </div>
        </section>

        {/* Closing Signature */}
        <section className="signature-section">
          <div className="signature-ornament">✦</div>
          <p className="signature-text">With love and starlight,</p>
          <p className="signature-name">Your sis-in-law, Bridget</p>
        </section>

      </div>
    </div>
  );
};

export default ReadingPage;
