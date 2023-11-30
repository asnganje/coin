import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { 
    Header,
    LeadInfo,
    InputSearch,
    CardContainer,
    CoinItem,
    CoinInfo,
    Button,
    Loader,
    Wrapper,
    Container } 
    from "../../styles/Card.style"
import { useState } from "react";


const CryptoCoins = () => {

    const {cryptoCurrency, status} = useSelector((store)=> {
        return store.crypto
    })

    const [searchCoin, setSearchCoin] = useState('')

    const onSearchItem = (e) => {
        setSearchCoin(e.target.value)
    }
    

    const searchItem = cryptoCurrency.filter((item)=> {
        return (item.name.toLowerCase().includes(searchCoin.toLowerCase())
        || item.symbol.toLowerCase().includes(searchCoin.toLowerCase()))
    })

    return(
        <Container>
            <Header>
                <LeadInfo>
                    {
                        cryptoCurrency.map((coin)=> {
                            if(coin.id === 'bitcoin') {
                                return(
                                    <div key={coin.id} className="contents">
                                        <div>
                                            <h2 style={{color:"white"}}>{coin.symbol}</h2>
                                            <h3 style={{color:"white"}}>
                                                Name: {coin.name}
                                                {' '}
                                                <br/>
                                            </h3>
                                            <p style={{color:"white"}}>
                                            Price: {' '}
                                                $
                                                {Number(coin.priceUsd).toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="contents1">
                                            <p style={{color:"white"}}>
                                                Available: {' '}
                                                {Number(coin.supply).toFixed(2)}
                                            </p>
                                            <p style={{color:"white"}}>
                                                Total: {' '}
                                                {Number(coin.maxSupply).toFixed(2)}
                                            </p>
                                            <p style={{color:"white"}}>
                                                Daily change Percentage: {' '} 
                                                {Number(coin.changePercent24Hr).toFixed(3)}%
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                            return null;
                        })
                    }
                </LeadInfo>
            </Header>
            <Wrapper>
                <InputSearch>
                    <input
                    className="search-box"
                    placeholder="Enter name"
                    type="text"
                    value={searchCoin}
                    onChange={onSearchItem}
                    />
                </InputSearch>
                <CardContainer>
                    {status === 'pending'? (
                        <Loader className="loader">
                            Loading
                            <span/>
                        </Loader>
                    ):(
                        searchItem.map((coin) => (
                            <CoinItem key={coin.id}>
                                <CoinInfo>
                                    <p style={{color:"black"}}>
                                        Rank: {' '}
                                        {coin.rank}
                                    </p>
                                    <h2>{coin.name}</h2>
                                      <p>{coin.symbol}</p>
                                    <p>
                                        $
                                        {Number(coin.priceUsd).toFixed(2)}
                                    </p>
                                </CoinInfo>
                                <Link to={`${coin.id}`} className="see-more">
                                  <Button>
                                    <p>➡</p>
                                 </Button>
                                </Link>
                            </CoinItem>
                        ))
                    )}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default CryptoCoins;