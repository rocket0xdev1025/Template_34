(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(896);
        },
      ]);
    },
    896: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return y;
          },
        });
      var r = a(7568),
        s = a(797),
        l = a(7582),
        n = a(5893),
        o = a(7294),
        i = a(5675),
        c = a.n(i),
        d = a(9068),
        x = {
          src: "/about.b2c7dc56.png",
          height: 500,
          width: 500,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAfEAABAwMFAAAAAAAAAAAAAAABAAMRAhIxBQYTFGH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/AJwGdIG1i7a32zkc9N84mMx4iIow7RbP/9k=",
          blurWidth: 8,
          blurHeight: 8,
        },
        h = {
          src: "/title.65125021.png",
          height: 500,
          width: 1500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAKlBMVEVMaXHZiMzWeMvMfsKSZmiodH/DWruOYHC2T6uDZFuxXqLKa7uNbGfXXs4ZytGjAAAADXRSTlMAN21VnET6X/xZtYc2tgjJ4gAAAAlwSFlzAAAuIwAALiMBeKU/dgAAACJJREFUeJwFwYcBACAIwLCyRBn/v2uCqJkK0HvuFhCezwc+BXoAcwQdgYgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        },
        m = a(1163),
        A = a(6261),
        b = a(1352),
        p = a(7232),
        u = {
          src: "/logo.a5572bca.png",
          height: 500,
          width: 500,
          blurDataURL:
            "",
          blurWidth: 8,
          blurHeight: 8,
        },
        g = function () {
          var e = (0, o.useState)(!1),
            t = e[0],
            a = e[1],
            r = (0, o.useState)(0),
            s = r[0],
            l = r[1],
            i = (0, m.useRouter)(),
            d = [
              { name: "Home", type: "scroll" },
              { name: "About", type: "scroll" },
              { name: "Tokenomics", type: "scroll" },
              { name: "HowToBuy", type: "scroll" },
              { name: "Roadmap", type: "scroll" },
            ],
            x = [
              {
                name: "Telegram",
                href: "https://t.me/yihe1014",
                icon: "/images/tg.svg",
              },
              {
                name: "X",
                href: "https://x.com/yihe1014",
                icon: "/images/twitter.svg",
              },
            ];
          (0, o.useEffect)(function () {
            var e = function () {
              l(window.scrollY);
            };
            return (
              window.addEventListener("scroll", e, { passive: !0 }),
              function () {
                return window.removeEventListener("scroll", e);
              }
            );
          }, []),
            (0, o.useEffect)(
              function () {
                a(!1);
              },
              [i]
            );
          var h = function (e) {
            var t = e.item,
              r = e.mobile;
            return "scroll" === t.type
              ? (0, n.jsx)(A.rU, {
                  to: t.name,
                  spy: !0,
                  smooth: !0,
                  offset: -100,
                  duration: 500,
                  className: ""
                    .concat(
                      "font-black uppercase tracking-wider cursor-pointer transition-all hover:text-gold-600 hover:scale-105",
                      " "
                    )
                    .concat(
                      void 0 !== r && r
                        ? "text-4xl drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] text-white"
                        : "text-lg text-brown-900"
                    ),
                  onClick: function () {
                    return a(!1);
                  },
                  children: "HowToBuy" === t.name ? "How To Buy" : t.name,
                })
              : null;
          };
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("header", {
                className:
                  "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(
                    s > 20 ? "py-4" : "py-6"
                  ),
                children: (0, n.jsx)("div", {
                  className: "container mx-auto px-4",
                  children: (0, n.jsxs)("div", {
                    className:
                      "\n            relative flex items-center justify-between px-4 md:px-6 py-3 rounded-full border-4 border-black transition-all duration-300\n            ".concat(
                        s > 20
                          ? "bg-white shadow-cartoon"
                          : "bg-white/90 backdrop-blur-sm shadow-cartoon-sm",
                        " shiny-3d\n          "
                      ),
                    children: [
                      (0, n.jsx)("div", {
                        className: "flex items-center gap-3 cursor-pointer ",
                        onClick: function () {
                          return window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        },
                        children: (0, n.jsx)("div", {
                          className: "relative w-12 overflow-hidden shrink-0",
                          children: (0, n.jsx)(c(), {
                            src: u,
                            alt: "Bloop",
                            layout: "responsive",
                            objectFit: "cover",
                            className: "rounded-full",
                          }),
                        }),
                      }),
                      (0, n.jsx)("nav", {
                        className: "hidden lg:flex items-center gap-8",
                        children: d.map(function (e, t) {
                          return (0, n.jsx)(h, { item: e }, t);
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, n.jsx)("div", {
                            className: "hidden md:flex items-center gap-3",
                            children: x.map(function (e, t) {
                              return (0,
                              n.jsx)("a", { href: e.href, target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-gold-400 hover:bg-gold-300 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none", title: e.name, children: (0, n.jsx)("div", { className: "relative w-5 h-5", children: (0, n.jsx)(c(), { src: e.icon, layout: "fill", objectFit: "contain", alt: e.name }) }) }, t);
                            }),
                          }),
                          (0, n.jsx)("button", {
                            onClick: function () {
                              return a(!t);
                            },
                            className:
                              "lg:hidden p-2 rounded-xl border-2 border-black bg-gold-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none",
                            children: t
                              ? (0, n.jsx)(b.Z, { size: 24 })
                              : (0, n.jsx)(p.Z, { size: 24 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className:
                  "fixed inset-0 z-40 bg-gold-400 border-l-8 border-black transition-transform duration-300 lg:hidden ".concat(
                    t ? "translate-x-0" : "translate-x-full"
                  ),
                style: {
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                },
                children: (0, n.jsxs)("div", {
                  className: "flex flex-col h-full pt-32 px-8 pb-8",
                  children: [
                    (0, n.jsx)("div", {
                      className: "flex flex-col gap-8 items-center",
                      children: d.map(function (e, t) {
                        return (0, n.jsx)(h, { item: e, mobile: !0 }, t);
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "mt-auto flex justify-center gap-6 pb-8",
                      children: x.map(function (e, t) {
                        return (0,
                        n.jsx)("a", { href: e.href, target: "_blank", rel: "noopener noreferrer", className: "w-16 h-16 flex items-center justify-center rounded-2xl border-4 border-black bg-white shadow-cartoon hover:scale-110 transition-transform", children: (0, n.jsx)("div", { className: "relative w-8 h-8", children: (0, n.jsx)(c(), { src: e.icon, layout: "fill", objectFit: "contain", alt: e.name }) }) }, t);
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        f = a(6915),
        v = {
          src: "/trending.9e82c211.png",
          height: 500,
          width: 500,
          blurDataURL:
            "",
          blurWidth: 8,
          blurHeight: 8,
        },
        w = {
          initial: { opacity: 0, y: 24 },
          animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        },
        j = {
          initial: { opacity: 0, scale: 0.5 },
          animate: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          },
        },
        N = {
          initial: {},
          animate: {
            transition: { staggerChildren: 0.18, delayChildren: 0.12 },
          },
        },
        y = function () {
          var e,
            t = "0xcomingsoon",
            a = (0, o.useState)(!1),
            i = a[0],
            m = a[1],
            A =
              ((e = (0, r.Z)(function () {
                return (0, l.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 2, , 3]),
                        [4, navigator.clipboard.writeText(t)]
                      );
                    case 1:
                      return (
                        e.sent(),
                        m(!0),
                        setTimeout(function () {
                          return m(!1);
                        }, 1500),
                        [3, 3]
                      );
                    case 2:
                      return e.sent(), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              })),
              function () {
                return e.apply(this, arguments);
              });
          return (0, n.jsxs)("div", {
            className:
              "min-h-screen font-irina text-black selection:bg-black selection:text-white bg-cartoon-pattern overflow-x-hidden",
            children: [
              (0, n.jsx)(g, {}),
              (0, n.jsx)("section", {
                className:
                  "relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center",
                id: "Home",
                children: (0, n.jsx)("div", {
                  className: "container mx-auto px-4 relative z-10",
                  children: (0, n.jsxs)(d.E.div, {
                    initial: "initial",
                    animate: "animate",
                    variants: N,
                    className:
                      "flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto",
                    children: [
                      (0, n.jsxs)(d.E.div, {
                        variants: j,
                        className: "relative group",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "absolute inset-0 bg-black rounded-full translate-y-2 translate-x-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3",
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "relative w-48 h-48 md:w-64 md:h-64 border-4 border-black rounded-full overflow-hidden bg-white",
                            children: (0, n.jsx)(c(), {
                              src: u,
                              alt: "Bloop",
                              layout: "fill",
                              objectFit: "cover",
                              className:
                                "hover:scale-110 transition-transform duration-500",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)(d.E.div, {
                        variants: w,
                        className: "space-y-4",
                        children: [
                          (0, n.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, n.jsx)(c(), {
                              src: h,
                              alt: "$1014",
                              width: 400,
                              height: 150,
                              objectFit: "contain",
                            }),
                          }),
                          (0, n.jsx)("p", {
                            className:
                              "text-2xl md:text-3xl font-bold text-brown-900 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-xl border-2 border-black/10",
                            children: "何一生日",
                          }),
                        ],
                      }),
                      (0, n.jsxs)(d.E.div, {
                        variants: w,
                        className: "flex flex-col items-center gap-3 w-full",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "flex flex-wrap justify-center gap-4 w-full",
                            children: [
                              (0, n.jsx)("a", {
                                href: "https://dexscreener.com/bsc/0xcomingsoon",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "bg-green-200 border-4 border-black px-6 py-2 rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] shadow-[2px_2px_0px_#000] transition-all flex items-center gap-2",
                                children: "View on Dexscreener",
                              }),
                              (0, n.jsx)("a", {
                                href: "https://etherscan.io/address/".concat(t),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "bg-blue-200 border-4 border-black px-6 py-2 rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] shadow-[2px_2px_0px_#000] transition-all flex items-center gap-2",
                                children: "View on Etherscan",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "flex items-center justify-center gap-2 bg-white border-4 border-black px-4 py-2 rounded-xl shadow-[2px_2px_0px_#000] mt-2",
                            children: [
                              (0, n.jsx)("span", {
                                className: "font-mono text-sm font-bold",
                                children: t,
                              }),
                              (0, n.jsx)("button", {
                                onClick: A,
                                className: "p-1 hover:bg-gray-100 rounded",
                                children: i
                                  ? (0, n.jsx)("span", {
                                      className: "font-bold text-green-600",
                                      children: "Copied!",
                                    })
                                  : (0, n.jsx)(f.Z, { size: 18 }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)(d.E.div, {
                        variants: w,
                        className: "flex flex-wrap justify-center gap-4",
                        children: [
                          (0, n.jsx)("a", {
                            href: "https://t.me/yihe1014",
                            target: "_blank",
                            rel: "noreferrer",
                            className:
                              "bg-blue-400 border-4 border-black px-8 py-4 rounded-xl font-black text-xl hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] shadow-[4px_4px_0px_#000] transition-all flex items-center gap-2",
                            children: "TELEGRAM",
                          }),
                          (0, n.jsx)("a", {
                            href: "https://x.com/yihe1014",
                            target: "_blank",
                            rel: "noreferrer",
                            className:
                              "bg-black border-4 border-black px-8 py-4 rounded-xl font-black text-xl text-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transition-all flex items-center gap-2",
                            children: "X (TWITTER)",
                          }),
                          (0, n.jsx)("div", {
                            className: "w-full md:w-auto",
                            children: (0, n.jsxs)("div", {
                              className:
                                "flex items-center justify-between gap-2 bg-white border-4 border-black px-4 py-4 rounded-xl shadow-[4px_4px_0px_#000] hover:-translate-y-1 transition-all",
                              children: [
                                (0, n.jsxs)("code", {
                                  className: "text-sm font-bold font-mono",
                                  children: [t.slice(0, 6), "...", t.slice(-4)],
                                }),
                                (0, n.jsx)("button", {
                                  onClick: A,
                                  className: "p-1 hover:bg-gray-100 rounded",
                                  children: i
                                    ? (0, n.jsx)("span", {
                                        className: "font-bold text-green-600",
                                        children: "Copied!",
                                      })
                                    : (0, n.jsx)(f.Z, { size: 20 }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className:
                  "bg-gold-400 border-y-4 border-black py-4 overflow-hidden transform -rotate-1 origin-left scale-105",
                children: (0, n.jsx)("div", {
                  className:
                    "animate-marquee whitespace-nowrap flex gap-16 text-3xl font-black text-black",
                  children: (0, s.Z)(Array(10)).map(function (e, t) {
                    return (0,
                    n.jsx)("span", { className: "flex items-center gap-4", children: "$1014 何一生日" }, t);
                  }),
                }),
              }),
              (0, n.jsx)("section", {
                className: "py-24 bg-brown-100",
                id: "About",
                children: (0, n.jsx)("div", {
                  className: "container mx-auto px-4",
                  children: (0, n.jsxs)("div", {
                    className:
                      "max-w-6xl mx-auto bg-white border-[6px] border-black rounded-[3rem] p-8 md:p-16 shadow-[12px_12px_0px_#000] relative overflow-hidden",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-0 left-0 w-full h-8 bg-black opacity-5",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "order-2 lg:order-1 space-y-8",
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "inline-block bg-gold-400 border-4 border-black px-6 py-2 rounded-full font-black text-lg transform rotate-2",
                                children: "THE LORE",
                              }),
                              (0, n.jsxs)("h2", {
                                className:
                                  "text-5xl md:text-7xl font-black leading-none text-black",
                                children: [
                                  "WHAT IS ",
                                  (0, n.jsx)("br", {}),
                                  (0, n.jsx)("span", {
                                    className: "text-brown-600",
                                    children: "何一生日?",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "text-xl font-medium text-gray-800 space-y-6 leading-relaxed",
                                children: [
                                  (0, n.jsx)("p", {
                                    children:
                                      "何一生日 on BNB — a symbolic project celebrating identity, time, and digital existence. Blending culture, community, and on-chain meaning.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "order-1 lg:order-2 flex justify-center flex-col items-center gap-6",
                            children: (0, n.jsxs)("div", {
                              className:
                                "relative w-full max-w-md aspect-square",
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "absolute inset-0 bg-black rounded-3xl transform rotate-3 scale-105",
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "absolute inset-0 bg-secondary rounded-3xl transform -rotate-2 border-4 border-black",
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "relative h-full w-full rounded-2xl overflow-hidden border-4 border-black transform rotate-1",
                                  children: (0, n.jsx)(c(), {
                                    src: x,
                                    alt: "About Bloop",
                                    layout: "fill",
                                    objectFit: "cover",
                                    className:
                                      "hover:scale-110 transition-transform duration-700",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, n.jsx)("section", {
                className: "py-20 bg-bg2 relative overflow-hidden",
                id: "Trending",
                children: (0, n.jsx)("div", {
                  className: "container mx-auto px-4",
                  children: (0, n.jsxs)("div", {
                    className: "max-w-5xl mx-auto text-center space-y-12",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "inline-block bg-pepe-light text-white border-4 border-black px-8 py-3 rounded-full font-black text-2xl transform -rotate-2 shadow-[6px_6px_0px_#000]",
                        children: "THE LEGEND OF 1014",
                      }),
                      (0, n.jsxs)("div", {
                        className: "relative group",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "absolute inset-0 bg-black translate-y-4 translate-x-4 rounded-3xl group-hover:translate-x-6 group-hover:translate-y-6 transition-transform",
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "relative bg-white border-4 border-black rounded-3xl p-4 transform rotate-1 hover:rotate-0 transition-transform duration-300",
                            children: (0, n.jsx)("div", {
                              className:
                                "block relative w-full aspect-video rounded-xl overflow-hidden border-2 border-gray-200",
                              children: (0, n.jsx)(c(), {
                                src: v,
                                layout: "fill",
                                objectFit: "cover",
                                alt: "The Legend of Bloop",
                                className:
                                  "hover:scale-105 transition-transform duration-700",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, n.jsx)("section", {
                className: "py-24",
                id: "Tokenomics",
                children: (0, n.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, n.jsx)("h2", {
                      className:
                        "text-6xl md:text-8xl font-black text-center mb-20 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]",
                      children: "TOKENOMICS",
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto",
                      children: [
                        {
                          option: "Ticker",
                          value: "$1014",
                          desc: "Remember the name.",
                          color: "bg-orange-100",
                        },
                        {
                          option: "Supply",
                          value: "1B",
                          desc: "1B Tokens",
                          color: "bg-blue-100",
                        },
                        {
                          option: "Tax",
                          value: "0/0",
                          desc: "No Buy/Sell Tax",
                          color: "bg-green-100",
                        },
                        {
                          option: "LP",
                          value: "\uD83D\uDD25",
                          desc: "Liquidity Burned",
                          color: "bg-red-100",
                        },
                      ].map(function (e, t) {
                        return (0,
                        n.jsxs)("div", { className: "".concat(e.color, " border-4 border-black rounded-3xl p-8 hover:-translate-y-4 transition-transform duration-300 shadow-[8px_8px_0px_#000] flex flex-col items-center text-center"), children: [(0, n.jsx)("h3", { className: "text-2xl font-black mb-4 uppercase", children: e.option }), (0, n.jsx)("div", { className: "text-4xl md:text-5xl font-black mb-4 break-all", children: e.value }), (0, n.jsx)("p", { className: "font-bold text-gray-700", children: e.desc })] }, t);
                      }),
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("section", {
                className: "py-24 bg-black text-white",
                id: "HowToBuy",
                children: (0, n.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, n.jsx)("h2", {
                      className:
                        "text-6xl md:text-8xl font-black text-center mb-20 text-white",
                      children: "HOW TO BUY",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "bg-white text-black border-4 border-white p-8 rounded-3xl transform hover:rotate-1 transition-transform",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "text-6xl font-black text-gray-200 absolute top-4 right-6",
                              children: "01",
                            }),
                            (0, n.jsx)("h3", {
                              className:
                                "text-3xl font-black mb-4 relative z-10",
                              children: "Wallet",
                            }),
                            (0, n.jsx)("p", {
                              className: "text-lg font-bold",
                              children:
                                "Download MetaMask or your preferred wallet.",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "bg-brown-500 text-white border-4 border-white p-8 rounded-3xl transform hover:-rotate-1 transition-transform",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "text-6xl font-black text-brown-700 absolute top-4 right-6",
                              children: "02",
                            }),
                            (0, n.jsx)("h3", {
                              className:
                                "text-3xl font-black mb-4 relative z-10",
                              children: "BNB",
                            }),
                            (0, n.jsx)("p", {
                              className: "text-lg font-bold",
                              children: "Get some BNB in your wallet to swap.",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "bg-gold-400 text-black border-4 border-white p-8 rounded-3xl transform hover:rotate-1 transition-transform",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "text-6xl font-black text-gold-600 absolute top-4 right-6",
                              children: "03",
                            }),
                            (0, n.jsx)("h3", {
                              className:
                                "text-3xl font-black mb-4 relative z-10",
                              children: "Pancakeswap",
                            }),
                            (0, n.jsx)("p", {
                              className: "text-lg font-bold",
                              children:
                                "Go to Pancakeswap and paste the $1014 address.",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "bg-blue-400 text-black border-4 border-white p-8 rounded-3xl transform hover:-rotate-1 transition-transform",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "text-6xl font-black text-blue-600 absolute top-4 right-6",
                              children: "04",
                            }),
                            (0, n.jsx)("h3", {
                              className:
                                "text-3xl font-black mb-4 relative z-10",
                              children: "Swap",
                            }),
                            (0, n.jsx)("p", {
                              className: "text-lg font-bold",
                              children:
                                "Swap BNB for $1014 and become a legend.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("section", {
                className: "py-24 bg-brown-100",
                id: "Roadmap",
                children: (0, n.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, n.jsx)("h2", {
                      className:
                        "text-6xl md:text-8xl font-black text-center mb-20 bg-white border-4 border-black inline-block px-8 py-2 rounded-full transform -rotate-2 mx-auto block shadow-[8px_8px_0px_#000]",
                      children: "ROADMAP",
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto",
                      children: [
                        {
                          title: "Awakening",
                          desc: [
                            "Launch on Pancakeswap",
                            "Community Formation",
                            "Socials Live",
                          ],
                          color: "bg-yellow-100",
                        },
                        {
                          title: "Expansion",
                          desc: [
                            "CoinGecko Listing",
                            "CMC Listing",
                            "Partnerships",
                          ],
                          color: "bg-pink-100",
                        },
                        {
                          title: "Domination",
                          desc: [
                            "CEX Listings",
                            "Merchandise",
                            "Global Events",
                          ],
                          color: "bg-purple-100",
                        },
                        {
                          title: "Legacy",
                          desc: [
                            "DAO Governance",
                            "Ecosystem Growth",
                            "Meme King",
                          ],
                          color: "bg-blue-100",
                        },
                      ].map(function (e, t) {
                        return (0, n.jsxs)(
                          "div",
                          {
                            className:
                              "relative bg-white border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_#000]",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-lg font-black font-mono",
                                children: ["PHASE ", t + 1],
                              }),
                              (0, n.jsx)("h3", {
                                className:
                                  "text-2xl font-black text-center mt-4 mb-6",
                                children: e.title,
                              }),
                              (0, n.jsx)("ul", {
                                className: "space-y-2",
                                children: e.desc.map(function (e, t) {
                                  return (0,
                                  n.jsxs)("li", { className: "flex items-center gap-2 font-bold text-sm", children: [(0, n.jsx)("div", { className: "w-2 h-2 bg-black rounded-full" }), e] }, t);
                                }),
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("footer", {
                className: "bg-black text-white py-12 text-center",
                children: (0, n.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, n.jsx)("h2", {
                      className:
                        "text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400",
                      children: "$1014",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex justify-center gap-8 mb-8 text-xl font-bold",
                      children: [
                        (0, n.jsx)("a", {
                          href: "https://t.me/yihe1014",
                          className: "hover:text-gold-400",
                          children: "Telegram",
                        }),
                        (0, n.jsx)("a", {
                          href: "https://x.com/yihe1014",
                          className: "hover:text-gold-400",
                          children: "Twitter",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      className: "text-gray-600 font-mono",
                      children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " $1014. The Legend Returns.",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [526, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
