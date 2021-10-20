"use strict";
var UranusSM;
(function (UranusSM) {
    class StateBase {
        constructor() {
            /** 状态类型 */
            this._stateType = -1;
        }
        get stateType() {
            return this._stateType;
        }
        $enter(target) {
            this.onEnter(target);
        }
        $execute(target) {
            this.onExecute(target);
        }
        $exit(target) {
            this.onExit(target);
        }
        onEnter(target) { }
        onExecute(target) { }
        onExit(target) { }
    }
    UranusSM.StateBase = StateBase;
})(UranusSM || (UranusSM = {}));
var UranusSM;
(function (UranusSM) {
    class StateMachine {
        constructor(_ower) {
            this._ower = _ower;
        }
        setCurrentState(state) {
            this._currentState = state;
        }
        getCurrentState() {
            return this._currentState;
        }
        setGlobalState(state) {
            this._globalState = state;
        }
        changeState(state) {
            this._currentState.$exit(this._ower);
            this._globalState.$exit(this._ower);
            this._previousState = this._currentState;
            this._currentState = state;
            this._currentState.$enter(this._ower);
            this._globalState.$enter(this._ower);
        }
        update() {
            this._currentState.$execute(this._ower);
            this._globalState.$execute(this._ower);
        }
    }
    UranusSM.StateMachine = StateMachine;
})(UranusSM || (UranusSM = {}));
