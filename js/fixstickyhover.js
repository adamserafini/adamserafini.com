// Unfortunately, mobiles, especially, iOS do weird stuff with :hover selector.
// http://www.prowebdesign.ro/how-to-deal-with-hover-on-touch-screen-devices/

if (!("ontouchstart" in document.documentElement)) {
document.documentElement.className += " no-touch";
}
