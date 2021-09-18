import React, { Component } from 'react'
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';

const theme = createMuiTheme({})

export default class Wrapper extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ fontFamily: 'Roboto, sans-serif' }}>
          {this.props.children}
        </div>
      </ThemeProvider>
    )
  }
}
