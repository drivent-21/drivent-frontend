/* eslint-disable default-case */
/* eslint-disable indent */
export const ticketButtonInfo = {
    title: 'Primeiro, escolha sua modalidade de ingresso',
    firstButton: {
        name: 'Presencial',
        price: 'R$ 250,00',
    },
    secondButton: {
        name: 'Online',
        price: 'R$ 100,00',
    },
};

export const hotelButtonInfo = {
    title: 'Agora, escolha sua modalidade de hospedagem',
    firstButton: {
        name: 'Sem Hotel',
        price: 'R$ 0',
    },
    secondButton: {
        name: 'Com Hotel',
        price: 'R$ 350,00',
    },
};

export function finishButtonInfo(price) {
    switch (price) {
        case 250:
            return 'Presencial + Sem Hotel';
        case 600:
            return 'Presencial + Com Hotel';
        case 100:
            return 'Online';
    }
}
