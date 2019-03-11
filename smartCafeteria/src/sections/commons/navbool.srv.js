empApp.service('NavBoolService', function () {

    this.navBool = false;

    this.getNavBool = function () {
        return this.navBool;
    }

    this.setNavBool = function(boolVal)
    {
        this.navBool = boolVal;

        return this.navBool;
    }

    return this;
});