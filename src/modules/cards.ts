import { reactive, readonly } from 'vue';

interface card {
  id: number;
  name: string;
  type: string;
  description: string;
  area: number;
  capacity: number;
  cost: number;
  attack: number;
  shop: boolean;
  hide: boolean;
  defense: number;
  price: number;
  colorName: string;
  color: string;
  img: string;
}

interface State {
  list: card[];
  busy: boolean;
}

const state: State = reactive({
  list: [],
  busy: false
});

// Card details (mock data) and actions
const actions = {
  loadCards() {
    mutations.setBusy(true);
    
    const mockData = [
      // Dread spot cards
      {
        id: 1,
        name: 'Dread Castle',
        type: 'Castle',
        description:
          'A dread fortress, built by the maleficent ancient warlocks to defile the approaching weak souls. Once touched by rune forces, the sense of humanity ends, acquiring corrupted power and mystical insights.',
        area: 12,
        capacity: NaN,
        cost: NaN,
        attack: NaN,
        shop: false,
        hide: false,
        defense: 30,
        price: 2.99,
        colorName: 'purple',
        color: 'purple',
        img: "1.png"
      },
      {
        id: 11,
        name: 'Dread Spot',
        type: 'Ground',
        description:
          'The spooky ancient place of unholy sacrifices. Warlock masters with mana runes fought the lightforged enemy shields, smiting and purging them to the oblivium.',
        area: 4,
        capacity: 3,
        cost: 0,
        attack: NaN,
        shop: false,
        hide: false,
        defense: 6,
        price: 3.99,
        colorName: 'purple',
        color: 'purple',
        img: "11.png"
      },
      {
        id: 12,
        name: 'Dread Spot',
        type: 'Ground',
        description:
          'The mists of forsaken souls chase away the light, making the terrain even darker and more gloomy, cornering fire mages with their treacherous tongues, corrupting even the most devout of light.',
        area: 6,
        capacity: 2,
        cost: 0,
        attack: NaN,
        shop: false,
        hide: false,
        defense: 4,
        price: 4.99,
        colorName: 'purple',
        color: 'purple',
        img: "12.png"
      },
      {
        id: 13,
        name: 'Warlock',
        type: 'Brave',
        description:
          'A vicious warrior that invokes fallen spirits and hits the enemy with their imbued runic punches. The melee attacks cause deep agony and suffering, drilling the flesh and empoisoning it.',
        area: NaN,
        capacity: NaN,
        cost: 2,
        attack: 4,
        shop: false,
        hide: false,
        defense: 5,
        price: 2.99,
        colorName: 'purple',
        color: 'purple',
        img: "13.png"
      },
      {
        id: 14,
        name: 'Chilling Warlock',
        type: 'Brave',
        description:
          'Chilling warlocks summon demonic energy blasts that stun the most powerful warriors. The dread greenish plasma energy is capable to smash armors and shields with only one hitting.',
        area: NaN,
        capacity: NaN,
        cost: 4,
        attack: 5,
        shop: false,
        hide: false,
        defense: 4,
        price: 3.99,
        colorName: 'purple',
        color: 'purple',
        img: "14.png"
      },
      {
        id: 15,
        name: 'Stone Witcher',
        type: 'Brave',
        description:
          'The shadow arrows hit the enemies turning them to stone, and making their movements difficult. They are considered the most maleficent rangers of Dread Spot.',
        area: NaN,
        capacity: NaN,
        cost: 2,
        attack: 3,
        shop: false,
        hide: false,
        defense: 4,
        price: 3.99,
        colorName: 'purple',
        color: 'purple',
        img: "15.png"
      },
      {
        id: 16,
        name: 'Witcher',
        type: 'Brave',
        description:
          'In its shade disguise form, the witcher ambushes behind the enemies, taking them with off guard and totally unprepared.',
        area: NaN,
        capacity: NaN,
        cost: 3,
        attack: 3,
        shop: false,
        hide: false,
        defense: 4,
        price: 5.99,
        colorName: 'purple',
        color: 'purple',
        img: "16.png"
      },
      // Holy ground cards
      {
        id: 2,
        name: 'Holy Fortress',
        type: 'Castle',
        description:
          "The holy elder's power imbues the rocky building and protects everyone that inhabits the Holy Fortress surroundings. This is the dream place for prospering and growing strong.",
        area: 12,
        capacity: NaN,
        cost: NaN,
        attack: NaN,
        shop: false,
        hide: false,
        defense: 30,
        price: 2.99,
        colorName: 'green',
        color: 'darkgreen',
        img: "2.png"
      },
      {
        id: 21,
        name: 'Holy Ground',
        type: 'Ground',
        description:
          'The arcane light brights over the paladins whom wield their swords. This is a place of glory and catharsis after the war and it purifies the soldier spirits.',
        area: 5,
        capacity: 3,
        cost: 0,
        attack: NaN,
        shop: false,
        hide: false,
        defense: 5,
        price: 3.99,
        colorName: 'green',
        color: 'darkgreen',
        img: "21.png"
      },
      {
        id: 22,
        name: 'Holy Ground',
        type: 'Ground',
        description:
          'The lightforged shields tinkle across the holy pathway between the ancient empowered rune trees. Light warriors roar bravely with their restored souls in face of battle.',
        area: 5,
        capacity: 5,
        cost: 0,
        attack: NaN,
        shop: false,
        hide: false,
        defense: 3,
        price: 4.99,
        colorName: 'green',
        color: 'darkgreen',
        img: "22.png"
      },
      {
        id: 23,
        name: 'Warrior',
        type: 'Brave',
        description:
          'The warriors are trained to bravely kill their enemies with maces, swords, axes or anything else they can wield. The warfare is a constant in their lives, making their souls always alert.',
        area: NaN,
        capacity: NaN,
        cost: 2,
        attack: 2,
        shop: false,
        hide: false,
        defense: 4,
        price: 2.99,
        colorName: 'green',
        color: 'darkgreen',
        img: "23.png"
      },
      {
        id: 24,
        name: 'Holy Warrior',
        type: 'Brave',
        description:
          'The holy warriors have empowered armors of light that overshadow the path where they tread and confunsing the enemies sights.',
        area: NaN,
        capacity: NaN,
        cost: 3,
        attack: 3,
        shop: false,
        hide: false,
        defense: 5,
        price: 3.99,
        colorName: 'green',
        color: 'darkgreen',
        img: "24.png"
      },
      {
        id: 25,
        name: 'Holy Hunter',
        type: 'Brave',
        description:
          'Holy hunters are the masters of the archery. They chase and shoot the target quickly as a lightning bolt, neutralize the threat.',
        area: NaN,
        capacity: NaN,
        cost: 2,
        attack: 2,
        shop: false,
        hide: false,
        defense: 3,
        price: 3.99,
        colorName: 'green',
        color: 'darkgreen',
        img: "25.png"
      },
      {
        id: 26,
        name: 'Wild Hunter',
        type: 'Brave',
        description:
          'The wild hunters tame beasts and use them against the enemies, distracting and hitting them with fire arrows that drill everything along the way.',
        area: NaN,
        capacity: NaN,
        cost: 1,
        attack: 1,
        shop: false,
        hide: false,
        defense: 5,
        price: 5.99,
        colorName: 'green',
        color: 'darkgreen',
        img: "26.png"
      },
      // Bloody gorge cards
      {
        id: 3,
        name: 'Château Rouge',
        type: 'Castle',
        description:
          'Chateau of the thousand sacrifices, the house of immolation. Demons and night creatures have haunted this place, dazing and confusing the lost souls that approach the hefty structure.',
        area: 12,
        capacity: NaN,
        cost: NaN,
        attack: NaN,
        shop: false,
        hide: false,
        defense: 30,
        price: 2.99,
        colorName: 'red',
        color: 'darkred',
        img: "3.png"
      },
      {
        id: 31,
        name: 'Bloody Gorge',
        type: 'Ground',
        description:
          'The ground was not always covered in blood, yet the gore celebrations were practiced by the insane veterans that stayed aimless wandering. Now these grounds desecrate souls and urge them on with vampiric powers.',
        area: 4,
        capacity: 2,
        cost: 0,
        attack: NaN,
        shop: false,
        hide: false,
        defense: 6,
        price: 3.99,
        colorName: 'red',
        color: 'darkred',
        img: "31.png"
      },
      {
        id: 32,
        name: 'Bloody Gorge',
        type: 'Ground',
        description:
          'The bloody moon is even more red when reflecting the imbued vampiric mana ground, becoming the power-well for the forgotten underground creatures.',
        area: 5,
        capacity: 4,
        cost: 0,
        attack: NaN,
        shop: false,
        hide: false,
        defense: 3,
        price: 4.99,
        colorName: 'red',
        color: 'darkred',
        img: "32.png"
      },
      {
        id: 33,
        name: 'Blood Berserker',
        type: 'Brave',
        description:
          'A giant familiar demon guides and advises the blood berserker against the enemies. The blood berserker overwhelms everything ahead with the long sword, obliterating even the best forged armors.',
        area: NaN,
        capacity: NaN,
        cost: 2,
        attack: 3,
        shop: false,
        hide: false,
        defense: 4,
        price: 2.99,
        colorName: 'red',
        color: 'darkred',
        img: "33.png"
      },
      {
        id: 34,
        name: 'Demon Berserker',
        type: 'Brave',
        description:
          "Demon berserker is the terror of warfares. Long bloody and fiery wings exempt weapons. It's hard hitting this berserker even when injured.",
        area: NaN,
        capacity: NaN,
        cost: 4,
        attack: 2,
        shop: false,
        hide: false,
        defense: 6,
        price: 3.99,
        colorName: 'red',
        color: 'darkred',
        img: "34.png"
      },
      {
        id: 35,
        name: 'Rogue',
        type: 'Brave',
        description:
          "Rogues come out of nowhere, stabbing behind the enemy with poisoned daggers and venomous blades. If the enemy doesn't die instantly he succumbs in agony.",
        area: NaN,
        capacity: NaN,
        cost: 1,
        attack: 3,
        shop: false,
        hide: false,
        defense: 3,
        price: 3.99,
        colorName: 'red',
        color: 'darkred',
        img: "35.png"
      },
      {
        id: 36,
        name: 'Dark Rogue',
        type: 'Brave',
        description:
          'Dark rogues stealthy walk within the enemies shadows, easily passing the front and cutting throats before their warcries. Assassination is part of their art.',
        area: NaN,
        capacity: NaN,
        cost: 2,
        attack: 4,
        shop: false,
        hide: false,
        defense: 4,
        price: 5.99,
        colorName: 'red',
        color: 'darkred',
        img: "36.png"
      }
    ];

    setTimeout(() => {
      // API CALLS GOES HERE

      // console.log('after 1 sec');
      mockData.forEach(card => {
        mutations.processCard(card);
      });

      mutations.setBusy(false);
    }, 1000);
  }
};

// Mutations
const mutations = {
  setBusy(newValue: boolean) {
    state.busy = newValue;
  },

  processCard(card: any) {
    // verifying if it exists
    const idx = state.list.findIndex(x => x.id === card.id);
    // console.log("card ", card.id, card);

    const newCard: card = {
      id: card.id,
      name: card.name,
      type: card.type,
      description: card.description,
      area: card.area,
      capacity: card.capacity,
      cost: card.cost,
      attack: card.attack,
      shop: card.shop,
      hide: card.hide,
      defense: card.defense,
      price: card.price,
      colorName: card.colorName,
      color: card.color,
      img: card.img,
    };

    if (idx === -1) {
      // whether it does not exist, create a new one
      state.list.push(newCard);
    } else {
      // editing current cards and avoiding duplicity
      state.list[idx] = newCard;
    }
  }
};

export default function useCards() {
  return readonly({
    state,
    actions,
    mutations
  });
}
