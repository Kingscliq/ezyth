import React from 'react';
import TradeViewChart from 'react-crypto-chart';

const MarketChart = () => {
  return (
    <TradeViewChart
      pair="BTCBUSD"
      containerStyle={{
        minHeight: '300px',
        minWidth: '400px',
        marginBottom: '30px',
      }}
      interval={''}
      candleStickConfig={{
        upColor: '#00c176',
        downColor: '#cf304a',
        borderDownColor: '#cf304a',
        borderUpColor: '#00c176',
        wickDownColor: '#838ca1',
        wickUpColor: '#838ca1',
      }}
      histogramConfig={{}}
      chartLayout={{}}
    />
  );
};

export default MarketChart;
