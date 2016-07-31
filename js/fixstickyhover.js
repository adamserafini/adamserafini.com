// Unfortunately, mobiles, especially, iOS do weird stuff with :hover selector.
// http://stackoverflow.com/q/17233804/996792
function fix()
{
    var el = this;
    var par = el.parentNode;
    var next = el.nextSibling;
    par.removeChild(el);
    setTimeout(function() {par.insertBefore(el, next);}, 0)
}
