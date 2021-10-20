declare namespace UranusSM {
    interface IEntity {
        stateMachine: StateMachine;
    }
}
declare namespace UranusSM {
    abstract class StateBase {
        /** 状态类型 */
        private _stateType;
        get stateType(): number;
        $enter(target: IEntity): void;
        $execute(target: IEntity): void;
        $exit(target: IEntity): void;
        protected onEnter(target: IEntity): void;
        protected onExecute(target: IEntity): void;
        protected onExit(target: IEntity): void;
    }
}
declare namespace UranusSM {
    class StateMachine {
        private _ower;
        private _currentState;
        private _globalState;
        private _previousState;
        constructor(_ower: IEntity);
        setCurrentState(state: StateBase): void;
        getCurrentState(): StateBase;
        setGlobalState(state: StateBase): void;
        changeState(state: StateBase): void;
        update(): void;
    }
}
