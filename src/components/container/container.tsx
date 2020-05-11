import React, { Component } from 'react';
import { loadData, Fetch } from '../../services/mathdro-service';
import { CardCase } from '../card-case/card-case';
import './container.css';

type Props = {
  data: string;
};

type Data = {
  header: string;
  value: number;
};

type State = {
  data: Data[];
};

export class Container extends Component<Props> {
  state: State = {
    data: [],
  };

  async componentDidMount() {
    const fetch: Fetch = await loadData();
    console.log(fetch);
    this.setState({
      ...this.state,
      data: [
        {
          header: 'Confirmed',
          value: fetch.jumlahKasus,
        },
        {
          header: 'Recovered',
          value: fetch.sembuh,
        },
        {
          header: 'Deaths',
          value: fetch.meninggal,
        },
      ],
    });

    console.log(this.state);
  }

  render(): React.ReactNode {
    if (this.state.data.length) {
      return (
        <div className='container'>
          {this.state.data.map((data, i) => (
            <CardCase key={i} data={data} />
          ))}
        </div>
      );
    }

    return <h1>loading...</h1>;
  }
}
