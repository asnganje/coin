import { Link, useParams } from 'react-router-dom';
import {InfoContainer,
        Container,
        InfoWrapper,
        Title
} from '../../styles/Info.style'
import { useSelector } from 'react-redux';


const CryptoDetails = () => {

    const {id} = useParams()

    const {cryptoCurrency, status} = useSelector((store)=>
    store.crypto
    )

    return(
        <InfoContainer>
            {status === 'pending'?
            (<div>Loading...</div>):(
                cryptoCurrency.map((coin)=> {
                    if(coin.id === id) {
                        return(
                            <Container key={coin.id}>
                                <Link className='back' to="/" style={{color:'white', fontWeight: "bold"}}>
                                ← Back
                                </Link>
                                <div className='main'>
                                    <div className='submain'>
                                        <h2 style={{color: 'white'}}>Crypto coin: {coin.name}</h2>
                                        <p style={{color: 'white'}}>Ranket at: Number {coin.rank}</p>
                                    </div>
                                </div>
                                <InfoWrapper>
                                    <Title className='details'>
                                        <p style={{color: 'white'}}>Coin name</p>
                                        <p style={{color: 'white'}}>{coin.name}</p>
                                    </Title>
                                    <Title className='details'>
                                        <p style={{color: 'white'}}>Coin symbol</p>
                                        <p style={{color: 'white'}}>{coin.symbol}</p>
                                    </Title>
                                    <Title className='details'>
                                        <p style={{color: 'white'}}>Ranking</p>
                                        <p style={{color: 'white'}}>{coin.rank}</p>
                                    </Title>
                                    <Title className='details'>
                                        <p style={{color: 'white'}}>Coin Price</p>
                                        <p style={{color: 'white'}}>{Number(coin.priceUsd).toFixed(2)}</p>
                                    </Title>
                                    <Title className='details'>
                                        <p style={{color: 'white'}}>Coin Volume</p>
                                        <p style={{color: 'white'}}>{Number(coin.volumeUsd24Hr).toFixed(2)}</p>
                                    </Title>
                                    <Title className='details'>
                                        <p style={{color: 'white'}}>Market cap</p>
                                        <p style={{color: 'white'}}>{Number(coin.marketCapUsd).toFixed(2)}</p>
                                    </Title>
                                    <Title className='details'>
                                        <p style={{color: 'white'}}>Available Coins for Supply</p>
                                        <p style={{color: 'white'}}>{Number(coin.supply).toFixed(0)}</p>
                                    </Title>
                                </InfoWrapper>
                            </Container>
                        )
                    }
                    return null
                })
            )}
        </InfoContainer>
    )
}

export default CryptoDetails;