namespace UranusSM {
    export abstract class StateBase {
        /** 状态类型 */
        private _stateType: number = -1;

        public get stateType(): number {
            return this._stateType;
        }

        $enter(target: IEntity): void {
            this.onEnter(target);
        }

        $execute(target: IEntity): void {
            this.onExecute(target);
        }

        $exit(target: IEntity): void {
            this.onExit(target);
        }

        protected onEnter(target: IEntity): void { }

        protected onExecute(target: IEntity): void { }

        protected onExit(target: IEntity): void { }
    }
}