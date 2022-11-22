// 액션 생성 함수
export const changeRadius = radius => {
    return {type: "CHANGE_RADIUS", borderRadius: radius};
};

// 초깃 값
const initialState = {
    borderRadius: "0",
};

// 리듀서
const changeRect = (state = initialState, action) => {
    // console.log(`Reducer changeRect state : `, state);
    // console.log(`Reducer changeRect action :`, action);
    switch (action.type) {
        case "CHANGE_RADIUS":
            return {...state, borderRadius: action.borderRadius};
        default:
            return state;
    }
};

export default changeRect;
