import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import './card-case.css';

type props = {
  data: {
    header: string;
    value: number;
  };
};

export class CardCase extends Component<props> {
  render(): React.ReactNode {
    const classCardHeader = (() => {
      switch (this.props.data.header.toLowerCase()) {
        case 'confirmed':
          return 'card-header card-header-confirmed';
        case 'recovered':
          return 'card-header card-header-recovered';
        case 'deaths':
          return 'card-header card-header-deaths';
      }
    })();
    
    return (
      <Card className='card'>
        <CardContent>
          <p className={classCardHeader}>{this.props.data.header}</p>
          <p className='card-value'>{this.props.data.value}</p>
        </CardContent>
      </Card>
    );
  }
}
