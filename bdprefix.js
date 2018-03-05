//META{"name":"magane"}*//

var magane = function () {};
magane.prototype.getName = () => "magane";
magane.prototype.getDescription = () => "magane.";
magane.prototype.getVersion = () => "0.1.0";
magane.prototype.getAuthor = () => "";
magane.prototype.getSettingsPanel = () => "";

magane.prototype.load = magane.prototype.add = magane.prototype.onSwitch = 
magane.prototype.onMessage = magane.prototype.convert = magane.prototype.observer =
magane.prototype.unload = magane.prototype.stop = () => null;

magane.prototype.start = () => {

