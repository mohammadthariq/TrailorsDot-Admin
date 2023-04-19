import React, { useState } from "react";
import styles from "./styles.module.css";
import { useMutation } from "react-query";
import { Formik } from "formik";
import {handleCreateBanner} from '../../../services/hooks/banner'
import { ThreeDots } from "react-loader-spinner";

export const Createbanner = () => {

  const { mutate, isLoading, refetch } = useMutation(handleCreateBanner, {
		onSuccess: (data, variables, context) => {
			refetch()
		},
	})

  return (
    <div className={styles.Wrapper}>
      <div className={styles.loginbox}>
        <h2>Create Banner</h2>
        <Formik
          initialValues={{
            name: "",
            views: "",
            genre: "",
            description: "",
            url: "",
          }}
          onSubmit={(values, actions) => {
            const banner = {
              name: values.name,
              views: values.views,
              genre: values.genre,
              description: values.description,
              url: values.url,
            };
            console.log(banner);
            mutate(banner);
            actions.setSubmitting(true);
          }}
          // validationSchema={schema}
        >
          {({
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
            handleSubmit,
            isSubmitting,
          }) => (
            <form>
              <div className={styles.userbox}>
                <input
                  type="text"
                  name="name"
                  required=""
                  value={values.name}
                  onChange={handleChange}
                />
                <label>Movie name</label>
              </div>
              <div className={styles.userbox}>
                <input
                  type="numbers"
                  name="views"
                  required=""
                  value={values.views}
                  onChange={handleChange}
                />
                <label>Views</label>
              </div>
              <div className={styles.userbox}>
                <input
                  type="text"
                  name="genre"
                  required=""
                  bannerData={values.genre}
                  onChange={handleChange}
                />
                <label>Genre</label>
              </div>
              <div className={styles.userbox}>
                <input
                  type="text"
                  name="description"
                  required=""
                  value={values.description}
                  onChange={handleChange}
                />
                <label>description</label>
              </div>
              <div className={styles.userbox}>
                <input type="file" name="" required="" />
                <label>Thumb</label>
              </div>
              <div className={styles.userbox}>
                <input
                  type="text"
                  name="url"
                  required=""
                  value={values.url}
                  onChange={handleChange}
                />
                <label>Media Url</label>
              </div>
              <a onClick={handleSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {isLoading ? (
													<ThreeDots color="#fff" wrapperStyle={{ justifyContent: 'center' }} height={20} width={40} />
												) : (
                "Create"
                        )}
              </a>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
