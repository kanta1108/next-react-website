import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Layout from 'components/layout'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'


export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
      />
    </Container>
  )
}
