import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '../../../../app/providers/StoreProvider';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
