namespace UranusSM {
    export class StateMachine {
        // @ts-ignore
        private _currentState: StateBase;
        // @ts-ignore
        private _globalState: StateBase;
        // @ts-ignore
        private _previousState: StateBase;

        constructor(private _ower: IEntity) { }

        setCurrentState(state: StateBase): void {
            this._currentState = state;
        }

        getCurrentState(): StateBase {
            return this._currentState;
        }

        setGlobalState(state: StateBase): void {
            this._globalState = state;
        }

        changeState(state: StateBase): void {
            this._currentState.$exit(this._ower);
            this._globalState.$exit(this._ower);
            this._previousState = this._currentState;
            this._currentState = state;
            this._currentState.$enter(this._ower);
            this._globalState.$enter(this._ower);
        }

        update(): void {
            this._currentState.$execute(this._ower);
            this._globalState.$execute(this._ower);
        }
    }
}