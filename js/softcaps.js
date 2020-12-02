//Softcap code from AbitofTetration's "Prestige Tree Rewritten"

const SOFTCAPS = {
    E2: {
        type: "log",
        start: new Decimal("1e3500"),
        exp:  new Decimal(1),
    },
    SE1: {
        type: "log",
        start: new Decimal("1e500"),
        exp: new Decimal(1),

    },
    E3: {
        type: "log",
        start: new Decimal("1e2000"),
        exp: new Decimal(1),
	},
	W1: {
        type: "log",
        start: new Decimal("1e3500"),
        exp: new Decimal(1),
	},
	W2: {
        type: "log",
        start: new Decimal("1e3500"),
        exp: new Decimal(1),
    },

	/*p12: {
		title: "Prestige Upgrade 2 (Prestige Boost)",
		type: "log",
		start: new Decimal("1e3500"),
		exp: new Decimal(1),
		display() { return hasUpgrade("p", 12) && !hasChallenge("h", 22) && upgradeEffect("p", 12).gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, logarithmic" },
	},
	p12_h22: {
		title: "Prestige Upgrade 2 (Prestige Boost)",
		type: "expRoot",
		start: new Decimal("1e3500"),
		mag: new Decimal(2),
		display() { return hasUpgrade("p", 12) && hasChallenge("h", 22) && upgradeEffect("p", 12).gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, exponent square rooted" },
	},
	e12: {
		title: "Enhance Upgrade 2 (Enhanced Prestige)",
		type: "root",
		start: new Decimal("1e1500"),
		mag: new Decimal(2),
		display() { return hasUpgrade("e", 12) && upgradeEffect("e", 12).gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, square rooted" },
	},
	spaceBuilding3: {
		title: "Tertiary Space Building",
		type: "expRoot",
		start: new Decimal("e3e9"),
		mag: new Decimal(3),
		display() { return player.s.buyables[13].gt(0) && buyableEffect("s", 13).gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, exponent cube rooted" },
	},
	spaceBuilding4: {
		title: "Quaternary Space Building",
		type: "log",
		start: new Decimal(1e6),
		exp: new Decimal(1),
		display() { return player.s.buyables[14].gt(0) && buyableEffect("s", 14).gte(this.start) },
		info() { return "Starts at ^"+format(this.start)+", logarithmic" },
	},
	hindr_base: {
		title: "Hindrance Spirit Effect",
		type: "expRoot",
		start: new Decimal(15e4),
		mag: new Decimal(4),
		spec() { return 3*(hasChallenge("h", 11)?1.2:1)*hasUpgrade("ba", 21)?8:1 },
		display() { return player.h.unlocked && tmp.h.effect.root(this.spec()).gte(this.start) },
		info() { return "Starts at "+format(this.start.pow(this.spec()))+"x, exponent brought to the "+format(this.mag)+"th root" },
	},
	q14_h: {
		title: "Quirk Upgrade 4 (Row 4 Synergy) - Quirk Boost",
		type: "log",
		start: new Decimal("1e1000"),
		exp: new Decimal(1000/3),
		display() { return hasUpgrade("q", 14) && upgradeEffect("q", 14).q.gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, logarithmic but raised to the "+format(this.exp)+"th power" },
	},
	q14_q: {
		title: "Quirk Upgrade 4 (Row 4 Synergy) - Hindrance Spirit Boost",
		type: "log",
		start: new Decimal("1e1100"),
		exp: new Decimal(1100/3),
		display() { return hasUpgrade("q", 14) && upgradeEffect("q", 14).h.gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, logarithmic but raised to the "+format(this.exp)+"th power" },
	},
	sol_eff: {
		title: "Solarity Effect",
		type: "expRoot",
		start: new Decimal(1e4),
		mag: new Decimal(2),
		display() { return player.o.unlocked && player.o.points.gte(this.start) },
		info() { return "Starts at "+format(this.start)+" Solarity, exponent square rooted" },
	},
	solCores: {
		title: "Solar Core Effect",
		type: "expRoot",
		start: new Decimal(5e4),
		mag: new Decimal(2),
		display() { return player.o.buyables[11].gte(this.start) },
		info() { return "Starts at "+format(this.start)+" Solar Cores, exponent square rooted" },
	},
	solCores2: {
		title: "Solar Core Effect",
		type: "log",
		start: new Decimal(1e60),
		exp: new Decimal(3),
		display() { return player.o.buyables[11].gte(Decimal.pow(10, this.start.log10().pow(2))) },
		info() { return "Starts at "+format(Decimal.pow(10, this.start.log10().pow(2)))+" Solar Cores, logarithmic but cubed" },
	},
	corona: {
		title: "Coronal Waves",
		type: "expRoot",
		start: new Decimal(4),
		mag: new Decimal(2),
		display() { return player.o.buyables[21].gt(0) && buyableEffect("o", 21).gte(this.start) },
		info() { return "Starts at "+format(this.start.times(100))+"%, exponent square rooted" },
	},
	hex: {
		title: "Hex Effect",
		type: "log",
		start: new Decimal("1e10000"),
		exp: new Decimal(10),
		display() { return player.m.unlocked && tmp.m.hexEff.gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, logarithmic but raised to the power of "+format(this.mag) },
	},
	spell1: {
		title: "First Spell (Booster Launch)",
		type: "expRoot",
		start: new Decimal(1e6),
		mag: new Decimal(1.5),
		display() { return player.m.unlocked && buyableEffect("m", 11).gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, exponent brought to the "+format(this.mag)+"th root" },
	},
	spell2: {
		title: "Second Spell (Time Warp)",
		type: "expRoot",
		start: new Decimal(1e6),
		mag: new Decimal(2),
		display() { return player.m.unlocked && buyableEffect("m", 12).gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, exponent square rooted" },
	},
	spell3: {
		title: "Third Spell (Quirk Amplification)",
		type: "root",
		start: new Decimal(45),
		mag: new Decimal(5),
		display() { return player.m.unlocked && buyableEffect("m", 13).gte(this.start) },
		info() { return "Starts at "+format(this.start)+" Free QLs, brought to the "+format(this.mag)+"th root" },
	},
	posBuff: {
		title: "Positivity Buff",
		type: "root",
		start: new Decimal(1e6),
		mag: new Decimal(3),
		display() { return player.ba.unlocked && tmp.ba.posBuff.gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, cube rooted" },
	},
	negBuff: {
		title: "Negativity Buff",
		type: "expRoot",
		start: new Decimal("1e1500"),
		mag: new Decimal(2),
		display() { return player.ba.unlocked && tmp.ba.negBuff.gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, exponent square rooted" },
	},
	ba11: {
		title: "Top-Left Balance Upgrade (Negative Ion)",
		type: "log",
		start: new Decimal(1.5),
		exp: new Decimal(0.5),
		display() { return hasUpgrade("ba", 11) && upgradeEffect("ba", 11).gte(this.start) },
		info() { return "Starts at "+format(this.start.times(100))+"%, logarithmic and square rooted" },
	},
	ba12: {
		title: "Top-Right Balance Upgrade (Positive Ion)",
		type: "log",
		start: new Decimal(0.75),
		exp: new Decimal(0.25),
		display() { return hasUpgrade("ba", 12) && upgradeEffect("ba", 12).gte(this.start) },
		info() { return "Starts at "+format(this.start.times(100))+"%, logarithmic and brought to the "+format(this.exp.pow(-1))+"th root" },
	},
	ba32: {
		title: "Balance Upgrade (Visible Regeneration)",
		type: "log",
		start: new Decimal(1e9),
		exp: new Decimal(1.6),
		display() { return hasUpgrade("ba", 32) && upgradeEffect("ba", 32).gte(this.start) },
		info() { return "Starts at "+format(this.start)+"x, logarithmic but raised to the "+format(this.exp)+"th power" },
	},*/
}

const STATIC_SCALE_DATA = [
	/*{
		start: new Decimal(12),
		start_adj: {
			"2": function() { 
				let start = new Decimal(12);
				if (hasUpgrade("q", 31)) start = start.plus(upgradeEffect("q", 31));
				return start;
			},
			"3": function() { 
				let start = new Decimal(12);
				if (hasUpgrade("q", 31)) start = start.plus(upgradeEffect("q", 31));
				return start;
			},
		},
		exp: new Decimal(2),
	}, {
		start: new Decimal(1225),
		start_adj: {
			"2": function() {
				let start = new Decimal(1225);
				if (inChallenge("h", 42)) start = new Decimal(1);
				return start;
			},
			"3": function() {
				let start = new Decimal(1225);
				if (inChallenge("h", 42)) start = new Decimal(1);
				return start;
			},
			"4": function() {
				let start = new Decimal(1225);
				if (inChallenge("h", 42)) start = new Decimal(1);
				return start;
			},
		},
		exp: new Decimal(10),
	},*/
]

function softcapActive(name, val) {
	if (!SOFTCAPS[name]) return false;
	else return Decimal.gte(val, getSoftcapData(name, "start"));
}

function getSoftcapData(name, id) {
	let data = SOFTCAPS[name][id]
	if (isFunction(data)) return data();
	else return data;
}

function softcap(name, val) {
	val = new Decimal(val);
	if (!softcapActive(name, val)) return val;
	let type = getSoftcapData(name, "type");
	let start = getSoftcapData(name, "start");
	if (type=="root") {
		let mag = getSoftcapData(name, "mag");
		return val.times(start.pow(mag.sub(1))).root(mag);
	} else if (type=="expRoot") {
		let mag = getSoftcapData(name, "mag");
		return Decimal.pow(10, val.log10().root(mag).times(start.log10().pow(Decimal.sub(1, mag.pow(-1)))));
	} else if (type=="log") {
		let exp = getSoftcapData(name, "exp");
		return val.log10().pow(exp).times(start.div(start.log10().pow(exp)));
	} else return val;
}

function getStaticScaleStart(scale, r) {
	let adjData = STATIC_SCALE_DATA[scale].start_adj;
	if (adjData) return adjData[String(r)]?adjData[String(r)]():STATIC_SCALE_DATA[scale].start;
	else return STATIC_SCALE_DATA[scale].start;
}

function getStaticScaleExp(scale, r) {
	let adjData = STATIC_SCALE_DATA[scale].exp_adj;
	if (adjData) return adjData[String(r)]?adjData[String(r)]():STATIC_SCALE_DATA[scale].exp;
	else return STATIC_SCALE_DATA[scale].exp;
}

function scaleStaticCost(gain, row) {
	for (let scale=STATIC_SCALE_DATA.length-1;scale>=0;scale--) {
		let start = getStaticScaleStart(scale, row+1)
		let exp = getStaticScaleExp(scale, row+1)
		if (gain.gte(start)) gain = gain.pow(exp).div(start.pow(exp.sub(1)));
	}
	return gain;
}

function softcapStaticGain(gain, row) {
	for (let scale=0;scale<STATIC_SCALE_DATA.length;scale++) {
		let start = getStaticScaleStart(scale, row+1)
		let exp = getStaticScaleExp(scale, row+1)
		if (gain.gte(start)) gain = gain.times(start.pow(exp.sub(1))).root(exp);
	}
	return gain;
}