import Link from 'next/link'
import React from 'react'
import { stackInfo } from '../pages/works'

type Props = {
  showModal: boolean
  title: string
  details: string
  stack: stackInfo[]
  apeal: string
  role: string
}

export const Modal = (props: Props) => {
  console.log(props.showModal)
  if (props.showModal) {
    return (
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 m-3 border-b border-gray-300 border-solid rounded-t">
                <h3 className="ml-8 text-3xl font-semibold">{props.title}</h3>
              </div>
              <div className="relative flex-auto px-10">
                <div className="ml-8">
                  <p className="text-sm leading-relaxed text-gray-600 ">
                    {props.details}
                  </p>
                  <p className="my-1 text-xl font-semibold opacity-60">
                    アピールポイント
                  </p>
                  <p className="my-2 ml-4 text-sm">{props.apeal}</p>
                  <p className="my-1 text-xl font-semibold opacity-60">担当</p>
                  <p className="my-2 ml-4 text-sm">{props.role}</p>
                  <p className="my-1 text-xl font-semibold opacity-60">
                    技術スタック
                  </p>
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
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    )
  } else {
    return null
  }
}
