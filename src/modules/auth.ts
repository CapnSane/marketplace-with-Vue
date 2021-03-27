import { readonly } from 'vue';

interface State {
  id: number;
  name: string;
  token: string;
}

const state: State = {
  id: 0,
  name: '',
  token: '',
};

export default function useAuth(): any {
  return readonly({
    state,
  });
}
