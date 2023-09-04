import { nanoid } from 'nanoid'
import create from 'zustand'

const initialState = {
  texture: 'dirt',
  cubes: [{
    id: nanoid(),
    pos: [1, 1, 1],
    texture: 'dirt'
  }, {
    id: nanoid(),
    pos: [1, 5, 1],
    texture: 'log'
  }],
}

export const useStore = create((set, get) => {
  const saveCubes = () => {
    console.log('Saving cubes...')
    localStorage.setItem('cubes', JSON.stringify(get().cubes))
  }

  // Save cubes every 10 seconds
  setInterval(saveCubes, 10000)

  return {
    ...initialState,
    addCube: (x, y, z) => {
      set(state => ({
        cubes: [...state.cubes, {
          id: nanoid(),
          texture: state.texture,
          pos: [x, y, z]
        }]
      }))
    },
    removeCube: (id) => {
      set(state => ({
        cubes: state.cubes.filter(cube => cube.id !== id)
      }))
    },
    setTexture: (texture) => {
      set(() => ({ texture }))
    },
    saveWorld: saveCubes,
    resetWorld: () => {
      set(() => initialState)
    }
  }
})

const savedCubes = JSON.parse(localStorage.getItem('cubes'))
if (savedCubes) {
  useStore.setState({ cubes: savedCubes })
}