import React, { useState } from "react";
import styles from "./styles.module.css";
import { useMutation } from "react-query";
import { Formik } from "formik";
import { ThreeDots } from "react-loader-spinner";
import { handleCreateList } from "../../../services/hooks/list";

export const Createlist = () => {

  const { mutate, isLoading, refetch } = useMutation(handleCreateList, {
		onSuccess: (data, variables, context) => {
			refetch()
		},
	})

  return (
    <div className={styles.Wrapper}>
      <div className={styles.loginbox}>
        <h2>Create List</h2>
        <Formik
          initialValues={{
            name: "",
            views: "",
            genre: "",
            description: "",
            url: "",
            cast:"",
            publicer:""
          }}
          onSubmit={(values, actions) => {
            const list = {
              name: values.name,
              views: values.views,
              genre: values.genre,
              description: values.description,
              url: values.url,
              cast:values.cast,
              publicer:values.publicer
            };
            console.log(list);
            mutate(list);
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
                  listData={values.genre}
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
              <div className={styles.userbox}>
                <input
                  type="text"
                  name="cast"
                  required=""
                  value={values.cast}
                  onChange={handleChange}
                />
                <label>Cast</label>
              </div>
              <div className={styles.userbox}>
                <input
                  type="text"
                  name="publicer"
                  required=""
                  value={values.publicer}
                  onChange={handleChange}
                />
                <label>Publisher</label>
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
