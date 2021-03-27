import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { stackInfo } from '../pages/works'

type Props = {
  thumbnailURL: string
  thumbnailWidth: number
  thumbnailHeight: number
  title: string
  productionPeriod: string
  details: string
  date: string
  stack: stackInfo[]
  apeal: string
  role: string
  githubUrl: string
  setOrder: boolean
  isMobile: boolean
  producers: number
}

export const Work = (props: Props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className="flex flex-wrap my-10 ">
        {showModal ? (
          <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center px-3 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="relative w-auto max-w-3xl mx-auto my-6">
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 m-3 border-b border-gray-300 border-solid rounded-t">
                    {/* <div className="">

                    </div> */}
                    <h3 className="ml-8 text-3xl font-semibold">
                      {props.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 ">
                      {props.details}
                    </p>
                  </div>
                  <div className="relative flex-auto px-10">
                    <div className="ml-8">
                      <div className="flex">
                        <Image
                          src={props.thumbnailURL}
                          width={
                            props.isMobile
                              ? props.thumbnailWidth / 3
                              : props.thumbnailWidth / 10
                          }
                          height={
                            props.isMobile
                              ? props.thumbnailHeight / 3
                              : props.thumbnailHeight / 10
                          }
                          alt={props.title}
                        ></Image>
                        <div className="ml-2">
                          <p className="my-1 text-lg font-semibold">制作人数</p>
                          <p className="my-2 ml-4 text-sm">
                            {props.producers}人
                          </p>
                          <p className="my-1 text-lg font-semibold">担当</p>
                          <p className="my-2 ml-4 text-sm">{props.role}</p>
                        </div>
                      </div>
                      <p className="my-1 text-lg font-semibold">
                        アピールポイント
                      </p>
                      <p className="my-2 ml-4 text-sm">{props.apeal}</p>
                      <p className="my-1 text-lg font-semibold">技術スタック</p>
                      <div className="flex ml-4">
                        {props.stack.map((stack, index) => {
                          return (
                            <div
                              className="m-1 select-none"
                              key={index + stack.alt}
                            >
                              <img
                                src={stack.src}
                                alt={stack.alt}
                                className="w-12 h-12 pointer-events-none"
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end p-6 rounded-b">
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-700 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      style={{ transition: 'all .15s ease' }}
                      onClick={() => setShowModal(false)}
                    >
                      閉じる
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </div>
        ) : null}
        <div className={`lg:w-3/4 ${props.setOrder ? 'lg:order-2' : ''}`}>
          <p className="ml-3 font-semibold text-gray-500 ">
            {props.productionPeriod}
          </p>
          <div
            className="mt-3 text-center duration-300 transform cursor-pointer hover:scale-105"
            onClick={() => setShowModal(true)}
          >
            <Image
              src={props.thumbnailURL}
              width={props.thumbnailWidth}
              height={props.thumbnailHeight}
              alt={props.title}
            />
          </div>
        </div>
        <div className={`lg:w-1/4 ${props.setOrder ? 'lg:order-1' : ''}`}>
          <h3 className="mb-4 text-xl font-bold text-green-600 lg:ml-10">
            {props.title}
          </h3>
          <p className="my-2 text-sm lg:ml-10">{props.details}</p>
          <div className="flex my-2">
            <p className="text-base font-bold lg:ml-10">制作期間:</p>
            <p className="text-base font-bold">{props.date}</p>
          </div>
          {props.githubUrl != '' ? (
            <div className="flex lg:ml-10 ">
              <p className="text-base font-bold">リポジトリ</p>
              <a
                href={props.githubUrl}
                className="cursor-pointer"
                target="_brank"
                title="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  className="ml-2 text-gray-400 fill-current hover:text-green-500"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          ) : null}
          <p className="my-2 text-base font-bold lg:ml-10">技術スタック</p>
          <div className="flex flex-wrap lg:ml-10">
            {props.stack.map(({ src, alt }) => {
              return (
                <div className="m-1" key={src}>
                  <div className="hidden pointer-events-none select-none lg:block">
                    <Image src={src} alt={alt} width={50} height={50} />
                  </div>
                  <div className="block pointer-events-none select-none lg:hidden">
                    <Image src={src} alt={alt} width={35} height={35} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
